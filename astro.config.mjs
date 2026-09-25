import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Preview phase: served at https://peteweejp.github.io/petemag/
// At domain cutover: site -> 'https://petemag.com', base -> '/'  (see docs/seo.md)
export default defineConfig({
  site: 'https://peteweejp.github.io',
  base: '/petemag',
  integrations: [sitemap()],
});
