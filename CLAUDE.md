# petemag.com rebuild

Portfolio site for Peter Magulak (Creative Director, Experience Design). Rebuilding the Squarespace site at petemag.com as a static **Astro** site deployed to **GitHub Pages** from `github.com/PeteweeJP/petemag`.

**Status:** scaffold stage. The current site is migrated as-is; the visual design direction isn't chosen yet. See `docs/decisions.md` for what's settled and `CHANGELOG.md` for what changed.

## Where things are

| If the task is about… | Go to |
|---|---|
| How Pete edits images, copy, fonts and publishes (his reference guide) | `docs/how-to-edit.md`. Keep it current when workflows change |
| What the old site looked like / what's on each page | `docs/reference/petemag-site-overview.md` (source of truth for migrated content) |
| Why something was decided | `docs/decisions.md` |
| Tone of copy | `docs/brand-voice.md` |
| Titles, meta descriptions, URLs, domain cutover | `docs/seo.md` |
| Visual direction, fonts, colors | `docs/design/README.md`, then `src/styles/tokens.css` |
| Editing a case study's text, role, links or image list | `src/content/<work\|apps\|illustration>/<slug>.md` |
| Content fields (frontmatter schema) | `src/content.config.ts`, explained in `src/content/README.md` |
| Adding image files | `public/images/<section>/<slug>/` (see `public/images/README.md`) |
| Name, tagline, nav, email, LinkedIn, indexing on/off | `src/data/site.ts` |
| Home page (switchable designs) | `src/components/home/` (see its README); pick one in `src/data/site.ts` → `home` |
| Resume page | `src/pages/resume.md` |
| Contact page | `src/pages/contact.astro` |
| Page structure / markup | `src/pages/`, `src/layouts/`, `src/components/` (see `src/README.md`) |
| Styles | `src/styles/tokens.css` (values), `src/styles/global.css` (layout) |
| Build/deploy | `astro.config.mjs`, `.github/workflows/deploy.yml` |

## Conventions

- **Content lives in markdown, not components.** Never hard-code project copy in `.astro` files.
- **URLs are flat** (`/paradise`, not `/work/paradise`) to match live Squarespace URLs. The file name is the slug. Don't rename a content file without updating `docs/seo.md`.
- **Always link through `url()`** from `src/lib/url.ts`. The site runs under `/petemag/` during preview, and hard-coded `/` links will break.
- **Change styles through tokens** in `tokens.css` first. Add new CSS to `global.css` only for new layouts.
- Unknown or unreadable copy is marked `<!-- TODO … -->` in content files. Don't invent facts; ask Pete.
- After meaningful changes, add a line to `CHANGELOG.md`. Record decisions in `docs/decisions.md`.
- Every folder with a `README.md` explains itself. Keep those short and current when you change the folder.

## Commands

Requires Node 22+ (not yet installed on Pete's Mac: `brew install node` or nodejs.org).

```
npm install      # first time only
npm run dev      # local preview at http://localhost:4321/petemag/
npm run build    # production build into dist/
```

Pushing to `main` builds and deploys automatically via GitHub Actions.
