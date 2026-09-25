# SEO

## Titles and descriptions
- **Page title pattern:** `{Page title} — The Portfolio of Peter Magulak` (set in `src/layouts/BaseLayout.astro`)
- **Home title:** "Creative Director Peter Magulak" (`src/data/site.ts`)
- **Default description:** in `src/data/site.ts`. Each case study can override it with `seoDescription:` in its frontmatter. Aim for 140–160 characters that name the client, the work and the role.
- **Share image:** a case study's first media image (or tile image) is used as the `og:image`.

## Indexing
- `site.indexable` in `src/data/site.ts` is **false** during preview. Every page gets `noindex`, so the github.io copy doesn't compete with petemag.com.
- A sitemap is generated automatically (`sitemap-index.xml`).
- The current Squarespace site blocks crawlers via robots rules (see audit §9). The new site shouldn't.

## URLs
Detail pages are flat, like Squarespace. Confirmed live URLs:

| Slug | Confirmed |
|---|---|
| `/comcast-business`, `/comcast-business-mobile`, `/ihop-ecommerce-website`, `/ihop-menu-photoshoot`, `/ihopar`, `/paradise`, `/expotv`, `/genvideo` | ✅ |
| All others | ❌ guessed. Check each against the live site and rename the content file if different, then set `slugVerified: true`. |

To find unverified ones: `grep -l "slugVerified: false" src/content/*/*.md`

If a slug has to change after launch, add a redirect in `astro.config.mjs` (`redirects: { '/old': '/new' }`).

## Domain cutover checklist
1. All slugs verified, all TODOs resolved (`grep -rn TODO src/`).
2. `astro.config.mjs`: `site: 'https://petemag.com'`, `base: '/'`.
3. `src/data/site.ts`: `indexable: true`.
4. Add `public/CNAME` containing `petemag.com`.
5. GitHub → Settings → Pages → Custom domain: `petemag.com`, enforce HTTPS.
6. DNS at the registrar: `A` records for `@` → 185.199.108.153, .109.153, .110.153, .111.153, and `CNAME` `www` → `peteweejp.github.io`.
7. Cancel Squarespace only after the new site is live and verified.
8. Submit the sitemap in Google Search Console.

## Open questions
- Is there existing analytics (Google Analytics, Squarespace analytics) to carry over or replace?
- Any Squarespace SEO settings (custom page descriptions) worth copying?
