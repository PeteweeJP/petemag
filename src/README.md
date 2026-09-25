# src

The site's code and content.

| Folder | What's in it |
|---|---|
| `content/` | **The words.** One markdown file per case study or gallery. Most edits happen here. |
| `data/site.ts` | Site-wide settings: name, tagline, nav, email, LinkedIn, indexing switch. |
| `pages/` | One file per URL. `[slug].astro` builds every case study; `resume.md` is the Resume page. |
| `layouts/` | Page shells. `BaseLayout` = `<head>`, SEO tags and header. `PageLayout` wraps markdown pages. |
| `components/` | Reusable pieces: `Header`, `Tile`, `TileGrid`, `MediaStack`. |
| `styles/` | `tokens.css` (design values) and `global.css` (layouts). |
| `lib/` | Helpers: `url()` for base-aware links, `getSection()` and `hasAsset()` for content. |
| `content.config.ts` | The schema every content file must match. The build fails with a clear error if one doesn't. |
