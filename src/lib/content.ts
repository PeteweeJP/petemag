import fs from 'node:fs';
import { getCollection } from 'astro:content';
import type { Section } from '../data/site';

// Published entries of a section, in grid order.
export async function getSection(section: Section) {
  const entries = await getCollection(section, (e) => !e.data.draft);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

// True if a file exists under public/. Lets pages show placeholders until images are added.
export const hasAsset = (path?: string) => !!path && fs.existsSync(`public/${path}`);
