// Makes smaller WebP copies of case-study images, tiles and video stills after the build,
// so phones and tablets can download a size that fits their screen (see src/lib/responsive.ts,
// which writes the matching srcset). Copies go into dist/ only; public/ stays as Pete's originals.
// A local cache (node_modules/.cache/responsive-images) keeps repeat builds fast.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Keep in sync with VARIANT_WIDTHS and makesVariant in src/lib/responsive.ts.
const WIDTHS = [640, 960, 1200];
const makesVariant = (originalWidth, width) => originalWidth > width + 100;
const QUALITY = 82;

// Images that never get a srcset: the home reel and its poster, Pete's portrait, logos,
// loop-video posters, and copies from a previous build.
const skip = (rel) =>
  rel.startsWith('images/home/') ||
  rel.startsWith('images/about/') ||
  /(^|\/)logo\.[a-z]+$/.test(rel) ||
  /-poster\.jpg$/.test(rel) ||
  /-\d+w\.webp$/.test(rel);

function* images(dir, root = dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* images(full, root);
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) yield path.relative(root, full).split(path.sep).join('/');
  }
}

export default function responsiveImages() {
  return {
    name: 'responsive-images',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const cache = path.join(process.cwd(), 'node_modules/.cache/responsive-images');
        fs.mkdirSync(cache, { recursive: true });
        let made = 0;
        let cached = 0;
        for (const rel of images(path.join(out, 'images'), out)) {
          if (skip(rel)) continue;
          const file = path.join(out, rel);
          const buf = fs.readFileSync(file);
          const { width } = await sharp(buf).metadata();
          const hash = crypto.createHash('sha1').update(buf).digest('hex').slice(0, 16);
          for (const w of WIDTHS) {
            if (!width || !makesVariant(width, w)) continue;
            const target = file.replace(/\.(jpe?g|png|webp)$/i, `-${w}w.webp`);
            const hit = path.join(cache, `${hash}-${w}-${QUALITY}.webp`);
            if (fs.existsSync(hit)) {
              cached++;
            } else {
              await sharp(buf).resize({ width: w }).webp({ quality: QUALITY, effort: 5 }).toFile(hit);
              made++;
            }
            fs.copyFileSync(hit, target);
          }
        }
        logger.info(`${made} image copies made, ${cached} reused from cache`);
      },
    },
  };
}
