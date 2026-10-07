// Writes dist/_redirects (Cloudflare's format) from src/data/redirects.mjs, so old addresses get
// real permanent (301) redirects instead of only the forwarding pages Astro makes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { withBase } from '../data/redirects.mjs';

export default function hostRedirects(base) {
  return {
    name: 'host-redirects',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const lines = Object.entries(withBase(base)).map(([from, to]) => `${from} ${to} 301`);
        fs.writeFileSync(path.join(fileURLToPath(dir), '_redirects'), lines.join('\n') + '\n');
      },
    },
  };
}
