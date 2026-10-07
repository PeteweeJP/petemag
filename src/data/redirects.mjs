// Old addresses that forward to new ones, written without the site's base path.
// Used twice at build time (astro.config.mjs): Astro makes a small forwarding page for each
// (works on any host), and src/integrations/host-redirects.mjs writes them to dist/_redirects
// as real permanent (301) redirects for Cloudflare. Listed in docs/seo.md.
export const redirects = {
  // About Me was the Resume page.
  '/resume': '/about',
  // Squarespace case-study addresses (petemag.com/<old>) -> the new, descriptive ones.
  '/aha': '/american-heart-association',
  '/bakery': '/ihop-bakery-favorites',
  '/bandl': '/bausch-lomb',
  '/benjerry': '/ben-and-jerrys',
  '/benjerryapp': '/ben-and-jerrys-ar',
  '/ddft': '/ihop-double-dipped',
  '/ebay': '/ebay-times-square',
  '/esb': '/empire-state-building',
  '/euem': '/ihop-contest',
  '/fbcanvas': '/ihop-facebook-canvas',
  '/freshmarket': '/ihop-fresh-market',
  '/holiday': '/ihop-holiday',
  '/latte-lovers': '/ihop-latte-lovers',
  '/posters': '/movie-posters',
  '/rfl': '/rfl-rebranding',
  '/scaryface': '/ihop-scary-face',
  '/stuffed-french-toast': '/ihop-sft-campaign',
  '/usarmy': '/us-army',
};

// Prefix both sides with the base path (e.g. "/petemag") when the site isn't at the root.
export const withBase = (base) => {
  const b = base.replace(/\/$/, '');
  return Object.fromEntries(Object.entries(redirects).map(([from, to]) => [`${b}${from}`, `${b}${to}`]));
};
