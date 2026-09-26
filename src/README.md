# src

The site's code and content.

| Folder | What's in it |
|---|---|
| `content/` | **The words.** One markdown file per case study or gallery. Most edits happen here. |
| `data/site.ts` | Site-wide settings: name, tagline, nav, email, LinkedIn, indexing switch. |
| `pages/` | One file per URL. `[slug].astro` builds every case study; `resume.md` is the Resume page. |
| `pages/*.txt.ts` | Generated text files: `robots.txt`, `llms.txt`, `llms-full.txt`. |
| `layouts/` | Page shells. `BaseLayout` = `<head>`, SEO tags and header. `PageLayout` wraps markdown pages. |
| `components/` | Reusable pieces: `Header`, `Tile`, `TileGrid`, `MediaStack` (with the zoom lightbox), `SectionIndex` (Work/Apps/Illustration pages), `home/` (home page variants). |
| `styles/` | `tokens.css` (design values) and `global.css` (layouts). |
| `lib/` | Helpers. `url.ts`: base-aware links. `content.ts`: loading entries, image checks and sizes, descriptions. `schema.ts`: structured data. `llms.ts`: the llms.txt files. |
| `integrations/` | Build add-ons. `image-privacy.mjs` blocks publishing photos with GPS location data. |
| `content.config.ts` | The schema every content file must match. The build fails with a clear error if one doesn't. |
