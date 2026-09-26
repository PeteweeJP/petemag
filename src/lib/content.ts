import fs from 'node:fs';
import path from 'node:path';
import { imageSize } from 'image-size';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Section } from '../data/site';

export type Entry = CollectionEntry<Section>;

const publicDir = path.join(process.cwd(), 'public');

// Published entries of a section, in grid order.
export async function getSection(section: Section) {
  const entries = await getCollection(section, (e) => !e.data.draft);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

// True if a file exists under public/. Lets pages show placeholders until images are added.
export const hasAsset = (file?: string): file is string => !!file && fs.existsSync(path.join(publicDir, file));

// Pixel size of an image under public/, so <img> can reserve space and the page doesn't jump while loading.
export function imageDims(file: string): { width?: number; height?: number } {
  try {
    const { width, height } = imageSize(fs.readFileSync(path.join(publicDir, file)));
    return { width, height };
  } catch {
    return {};
  }
}

// Plain-text paragraphs of an entry's description: markdown and TODO comments removed.
// Lists and table rows keep one line each; table rows read as "Label: value".
export function plainParagraphs(body = '') {
  const line = (l: string) => {
    const t = l.trim();
    if (/^\|?[\s:|-]+\|?$/.test(t) && t.includes('-')) return ''; // table separator row
    const text = t.startsWith('|')
      ? t.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()).join(': ')
      : t.replace(/^(#{1,6}|>)\s+/, '').replace(/^[-*]\s+/, '- ');
    return text
      .replace(/<br\s*\/?>/gi, '')
      .replace(/<[^>]+>/g, '')
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // links/images -> their text
      .replace(/(\*\*|__|\*|`)/g, '')
      .replace(/[ \t]+/g, ' ')
      .trim();
  };
  return body
    .replace(/<!--[\s\S]*?-->/g, '')
    .split(/\n\s*\n/)
    .map((p) => p.split('\n').map(line).filter(Boolean).join('\n'))
    .filter(Boolean);
}

// Meta description: explicit seoDescription, else the first paragraph trimmed to ~155 characters.
export function describe(entry: Entry) {
  if (entry.data.seoDescription) return entry.data.seoDescription;
  const first = plainParagraphs(entry.body)[0]?.replace(/\s+/g, ' ');
  if (!first) {
    const { title, role } = entry.data;
    if (entry.collection === 'illustration') return `${title}: an illustration gallery by Peter Magulak.`;
    return `Case study: ${title}.${role ? ` Role: ${role}.` : ''} From the portfolio of creative director Peter Magulak.`;
  }
  if (first.length <= 155) return first;
  return first.slice(0, first.lastIndexOf(' ', 152)).replace(/[,;:]$/, '') + '…';
}
