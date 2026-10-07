import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import imagePrivacy from './src/integrations/image-privacy.mjs';
import cspGuard from './src/integrations/csp-guard.mjs';
import responsiveImages from './src/integrations/responsive-images.mjs';
import hostRedirects from './src/integrations/host-redirects.mjs';
import { withBase } from './src/data/redirects.mjs';

// Hosted on Cloudflare (Workers static assets, see wrangler.jsonc) at the site root.
// At domain cutover: site -> 'https://petemag.com' (see docs/seo.md).
const site = 'https://petemag.petemag.workers.dev';
const base = '/';

export default defineConfig({
  site,
  base,

  // Pages build as /paradise.html and are served at /paradise (no trailing slash),
  // matching the Squarespace URLs. Internal links, canonicals and the sitemap all agree,
  // so no click costs a redirect.
  trailingSlash: 'ignore',
  build: { format: 'file' },

  // Renamed pages: old addresses forward to the new ones. The list is in src/data/redirects.mjs
  // (npm run audit fails if a redirect points at a page that doesn't exist).
  redirects: withBase(base),

  // No code blocks on this site; the default highlighter's inline styles would conflict with the CSP below.
  markdown: { syntaxHighlight: false },

  // imagePrivacy: blocks publishing photos that still contain GPS location data.
  // cspGuard: fails the build if a page has inline style="" attributes (the CSP would block them).
  // responsiveImages: makes smaller WebP copies of images for phones and tablets (dist/ only).
  // hostRedirects: writes dist/_redirects (real 301 redirects on Cloudflare) from the same list.
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.endsWith('/thanks') }), imagePrivacy(), cspGuard(), responsiveImages(), hostRedirects(base)],

  // Content Security Policy, added as a <meta> tag on every page. Astro hashes its own
  // scripts and styles; everything else must come from the sources listed here.
  // Only enforced in `npm run build` / on the live site, not in `npm run dev`.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        // hCaptcha (contact form) needs its own domains; don't pin subdomains (per hCaptcha docs).
        'frame-src https://player.vimeo.com https://www.youtube-nocookie.com https://hcaptcha.com https://*.hcaptcha.com',
        "connect-src 'self' https://api.web3forms.com https://hcaptcha.com https://*.hcaptcha.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self' https://api.web3forms.com",
        'upgrade-insecure-requests',
      ],
      styleDirective: { resources: ["'self'", 'https://hcaptcha.com', 'https://*.hcaptcha.com'] },
      scriptDirective: { resources: ["'self'", 'https://hcaptcha.com', 'https://*.hcaptcha.com'] },
    },
  },
});
