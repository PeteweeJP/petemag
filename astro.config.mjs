import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import imagePrivacy from './src/integrations/image-privacy.mjs';
import cspGuard from './src/integrations/csp-guard.mjs';
import responsiveImages from './src/integrations/responsive-images.mjs';

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

  // Renamed pages: old addresses forward to the new ones (see docs/seo.md).
  // Astro doesn't add `base` to the destination, so it's written out; drop '/petemag' at domain cutover
  // (npm run audit fails if a redirect points at a page that doesn't exist).
  redirects: {
    '/resume': '/petemag/about',
    // Squarespace case-study addresses (petemag.com/<old>) -> the new, descriptive ones.
    '/aha': '/petemag/american-heart-association',
    '/bakery': '/petemag/ihop-bakery-favorites',
    '/bandl': '/petemag/bausch-lomb',
    '/benjerry': '/petemag/ben-and-jerrys',
    '/benjerryapp': '/petemag/ben-and-jerrys-ar',
    '/ddft': '/petemag/ihop-double-dipped',
    '/ebay': '/petemag/ebay-times-square',
    '/esb': '/petemag/empire-state-building',
    '/euem': '/petemag/ihop-contest',
    '/fbcanvas': '/petemag/ihop-facebook-canvas',
    '/freshmarket': '/petemag/ihop-fresh-market',
    '/holiday': '/petemag/ihop-holiday',
    '/latte-lovers': '/petemag/ihop-latte-lovers',
    '/posters': '/petemag/movie-posters',
    '/rfl': '/petemag/rfl-rebranding',
    '/scaryface': '/petemag/ihop-scary-face',
    '/stuffed-french-toast': '/petemag/ihop-sft-campaign',
    '/usarmy': '/petemag/us-army',
  },

  // No code blocks on this site; the default highlighter's inline styles would conflict with the CSP below.
  markdown: { syntaxHighlight: false },

  // imagePrivacy: blocks publishing photos that still contain GPS location data.
  // cspGuard: fails the build if a page has inline style="" attributes (the CSP would block them).
  // responsiveImages: makes smaller WebP copies of images for phones and tablets (dist/ only).
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.endsWith('/thanks') }), imagePrivacy(), cspGuard(), responsiveImages()],

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
