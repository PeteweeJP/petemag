// Site audit: run after `npm run build` (npm run audit). Checks the built site in dist/ for the
// rules this project has settled on. Exits non-zero if anything fails, so it can gate a release.
//
//   Titles        every page has a <title> of at most 60 characters, and titles are unique
//   Descriptions  every indexable page has a unique meta description
//   Headings      exactly one <h1> per page
//   Images        every <img> has an alt attribute
//   Links         every internal link and image points at a file that exists in dist/
//   Structured    every JSON-LD block parses
//   Canonical     every page has a canonical URL
//   Contrast      text color tokens pass WCAG AA on the backgrounds they're used on
//   Accent        the brand orange is never used as text color (fails AA)
//   Drafts        nothing in drafts/ or the local-only planning docs is tracked by git
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const dist = path.join(root, 'dist');
const failures = [];
const warnings = [];
const fail = (msg) => failures.push(msg);

if (!fs.existsSync(dist)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

// Deploy base, e.g. "/petemag" during preview, "" after domain cutover.
const config = fs.readFileSync(path.join(root, 'astro.config.mjs'), 'utf8');
const base = (config.match(/base:\s*'([^']*)'/)?.[1] ?? '').replace(/\/$/, '');

const pages = fs.readdirSync(dist).filter((f) => f.endsWith('.html'));
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

// Resolve an internal URL to a file in dist/ (pages are built as name.html).
function exists(url) {
  let p = url.split(/[?#]/)[0];
  if (base && p.startsWith(base)) p = p.slice(base.length);
  p = decodeURIComponent(p.replace(/^\//, ''));
  if (p === '' || p.endsWith('/')) return fs.existsSync(path.join(dist, p, 'index.html'));
  return fs.existsSync(path.join(dist, p)) || fs.existsSync(path.join(dist, `${p}.html`));
}

const titles = new Map();
const descriptions = new Map();

for (const file of pages) {
  const html = fs.readFileSync(path.join(dist, file), 'utf8');
  const noindex = /<meta name="robots" content="noindex"/.test(html) && file === '404.html';

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  if (!title) fail(`${file}: missing <title>`);
  else if (title.length > 60) fail(`${file}: title is ${title.length} characters (max 60): "${title}"`);
  titles.set(title, [...(titles.get(title) ?? []), file]);

  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!desc) fail(`${file}: missing meta description`);
  else if (!noindex) descriptions.set(desc, [...(descriptions.get(desc) ?? []), file]);

  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1s !== 1) fail(`${file}: has ${h1s} <h1> elements (expected 1)`);

  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\balt=/.test(img)) fail(`${file}: <img> without alt: ${img.slice(0, 80)}`);
    const src = img.match(/\bsrc="([^"]+)"/)?.[1];
    if (src && src.startsWith('/') && !exists(src)) fail(`${file}: image not found: ${src}`);
  }

  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    if (href.startsWith('/') && !exists(href)) fail(`${file}: broken internal link: ${href}`);
  }

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(json);
    } catch {
      fail(`${file}: JSON-LD does not parse`);
    }
  }

  if (!/<link rel="canonical"/.test(html)) fail(`${file}: missing canonical link`);
}

for (const [title, files] of titles) if (files.length > 1) fail(`Duplicate title "${title}": ${files.join(', ')}`);
for (const [, files] of descriptions) if (files.length > 1) fail(`Duplicate meta description: ${files.join(', ')}`);

// --- Contrast (WCAG AA) from the design tokens ---
const tokens = fs.readFileSync(path.join(root, 'src/styles/tokens.css'), 'utf8');
const color = (name) => tokens.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`))?.[1];
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
// White text over a white photo under the tile overlay: the worst case for tile text.
const overlayAlpha = Number(tokens.match(/--color-overlay:\s*rgb\(0 0 0 \/ ([\d.]+)\)/)?.[1] ?? 0);
const shade = Math.round(255 * (1 - overlayAlpha)).toString(16).padStart(2, '0');
const worstTile = `#${shade}${shade}${shade}`;

const pairs = [
  ['text on page background', color('color-text'), color('color-bg')],
  ['text on white', color('color-text'), color('color-surface')],
  ['muted text on page background', color('color-muted'), color('color-bg')],
  ['muted text on white', color('color-muted'), color('color-surface')],
  ['tile text over a white photo', color('color-on-image'), worstTile],
];
for (const [label, fg, bg] of pairs) {
  if (!fg || !bg) {
    warnings.push(`Contrast: couldn't read tokens for "${label}"`);
    continue;
  }
  const r = ratio(fg, bg);
  if (r < 4.5) fail(`Contrast: ${label} is ${r.toFixed(2)}:1 (AA needs 4.5:1)`);
}

// --- Brand orange must never be a text color ---
const css = fs.readFileSync(path.join(root, 'src/styles/global.css'), 'utf8');
if (/(^|[\s;{])color:\s*var\(--color-accent\)/m.test(css)) {
  fail('global.css uses --color-accent as a text color (it fails AA). Use it for bars, underlines and backgrounds only.');
}

// --- Local-only files must not be tracked by git ---
try {
  const tracked = execSync('git ls-files drafts docs/reference docs/design docs/decisions.md docs/brand-voice.md docs/seo.md', {
    cwd: root,
    encoding: 'utf8',
  }).trim();
  if (tracked) fail(`Local-only files are tracked by git:\n    ${tracked.split('\n').join('\n    ')}`);
} catch {
  warnings.push('Could not run git to check local-only files.');
}

// --- Report ---
console.log(`Audited ${pages.length} pages.`);
for (const w of warnings) console.log(`  warning: ${w}`);
if (failures.length) {
  console.log(`\n${failures.length} problem(s):`);
  for (const f of failures) console.log(`  ✗ ${f}`);
  process.exit(1);
}
console.log('All checks passed: titles, descriptions, headings, alt text, links, JSON-LD, canonicals, contrast, accent use, local-only files.');
