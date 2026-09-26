import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Preview phase: served at https://peteweejp.github.io/petemag/
// At domain cutover: site -> 'https://petemag.com', base -> '/'  (see docs/seo.md)
export default defineConfig({
  site: 'https://peteweejp.github.io',
  base: '/petemag',

  // Pages build as /paradise.html and are served at /paradise (no trailing slash),
  // matching the Squarespace URLs. Internal links, canonicals and the sitemap all agree,
  // so no click costs a redirect.
  // 'ignore' lets the local preview accept /petemag and /petemag/ alike.
  trailingSlash: 'ignore',
  build: { format: 'file' },

  // No code blocks on this site; the default highlighter's inline styles would conflict with the CSP below.
  markdown: { syntaxHighlight: false },

  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],

  // Content Security Policy, added as a <meta> tag on every page. Astro hashes its own
  // scripts and styles; everything else must come from the sources listed here.
  // Only enforced in `npm run build` / on the live site, not in `npm run dev`.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        'font-src https://fonts.gstatic.com',
        'frame-src https://player.vimeo.com',
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
      styleDirective: { resources: ["'self'", 'https://fonts.googleapis.com'] },
    },
  },
});
