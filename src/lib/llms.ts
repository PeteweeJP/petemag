// Builds /llms.txt (an index for AI agents, per llmstxt.org) and /llms-full.txt (all site text in one file).
import fs from 'node:fs';
import path from 'node:path';
import { site, sections, type Section } from '../data/site';
import { getSection, describe, plainParagraphs } from './content';
import { url } from './url';

const order: Section[] = ['work', 'apps', 'illustration'];
const abs = (base: URL, p = '') => new URL(url(p), base).href;

const header = (base: URL) =>
  [
    `# ${site.name}`,
    '',
    `> ${site.jobTitle} at ${site.employer}. ${site.description}`,
    '',
    `Tagline: ${site.tagline}`,
    `Contact: ${site.email} · LinkedIn: ${site.linkedin}`,
    `Resume: ${abs(base, 'resume')}`,
    '',
  ];

export async function llmsIndex(base: URL) {
  const out = header(base);
  for (const s of order) {
    out.push(`## ${sections[s].title}`, '', sections[s].summary, '');
    for (const e of await getSection(s)) {
      out.push(`- [${e.data.title}](${abs(base, e.id)}): ${describe(e)}`);
    }
    out.push('');
  }
  out.push('## Optional', '', `- [Full text of every page](${abs(base, 'llms-full.txt')})`, `- [Contact](${abs(base, 'contact')})`, '');
  return out.join('\n');
}

export async function llmsFull(base: URL) {
  const out = header(base);
  for (const s of order) {
    out.push(`## ${sections[s].title}`, '');
    for (const e of await getSection(s)) {
      const d = e.data;
      out.push(`### ${d.title}`, '', `URL: ${abs(base, e.id)}`, `Client: ${d.client}`);
      if (d.role) out.push(`Role: ${d.role}`);
      out.push('', ...plainParagraphs(e.body).flatMap((p) => [p, '']));
      if (d.media.length) out.push('Shown on the page:', ...d.media.map((m) => `- ${m.type === 'video' ? 'Video: ' : ''}${m.alt}`), '');
    }
  }
  // Resume: the markdown source without its frontmatter.
  const resume = fs.readFileSync(path.join(process.cwd(), 'src/pages/resume.md'), 'utf8').replace(/^---[\s\S]*?---\s*/, '');
  out.push('## Resume', '', resume.replace(/^#/gm, '##'));
  return out.join('\n');
}
