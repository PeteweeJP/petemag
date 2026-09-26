// /robots.txt: generated so the sitemap URL always matches the current domain.
// All crawlers, including AI agents, are welcome. While site.indexable is false, pages
// carry a noindex tag instead of being blocked here, so crawlers can still see that tag.
import type { APIRoute } from 'astro';
import { url } from '../lib/url';

export const GET: APIRoute = ({ site }) =>
  new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL(url('sitemap-index.xml'), site)}`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
