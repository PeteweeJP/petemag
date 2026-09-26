// Fails the build if any page contains an inline style="" attribute. The Content Security
// Policy blocks those, so they would silently not apply and log errors in the browser.
// Common cause: markdown table alignment markers like | :--- | (use | --- | instead).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function* htmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

export default function cspGuard() {
  return {
    name: 'csp-guard',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const root = fileURLToPath(dir);
        const bad = [...htmlFiles(root)]
          .filter((file) => / style="/.test(fs.readFileSync(file, 'utf8')))
          .map((file) => path.relative(root, file));
        if (bad.length) {
          throw new Error(
            `Inline style="" attributes found (blocked by the site's security policy) in:\n  ${bad.join('\n  ')}\n` +
              'If a markdown table uses alignment markers like | :--- |, change them to | --- |. ' +
              'Otherwise move the styling into src/styles/global.css.',
          );
        }
      },
    },
  };
}
