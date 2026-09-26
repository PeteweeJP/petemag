# petemag.com rebuild

Portfolio site for Peter Magulak (Creative Director, Experience Design). Rebuilding the Squarespace site at petemag.com as a static **Astro** site deployed to **GitHub Pages** from `github.com/PeteweeJP/petemag`.

**Status:** scaffold stage. The current site is migrated as-is; the visual design direction isn't chosen yet. See `docs/decisions.md` for what's settled and `CHANGELOG.md` for what changed.

## Where things are

| If the task is about… | Go to |
|---|---|
| Routines: publish drafts, add images, release | Skills in `.claude/skills/` (`/publish-drafts`, `/add-images`, `/release`). Follow them. |
| Independent pre-release review | `.claude/agents/petemag-reviewer.md` (read-only) |
| Quality checks on the built site | `npm run audit` → `scripts/audit.mjs` (also runs in CI) |
| How Pete edits images, copy, fonts and publishes (his reference guide) | `docs/how-to-edit.md`. Keep it current when workflows change |
| What the old site looked like / what's on each page | `docs/reference/petemag-site-overview.md` (source of truth for migrated content) |
| Why something was decided | `docs/decisions.md` |
| Tone of copy | `docs/brand-voice.md` |
| Titles, meta descriptions, URLs, domain cutover | `docs/seo.md` |
| Visual direction, fonts, colors | `docs/design/README.md`, then `src/styles/tokens.css` |
| Pete's copy drafts ("publish my ready drafts") | `drafts/<work\|apps>/<slug>.md` (local-only, see `drafts/README.md`) |
| Editing a case study's text, role, links or image list | `src/content/<work\|apps\|illustration>/<slug>.md` |
| Content fields (frontmatter schema) | `src/content.config.ts`, explained in `src/content/README.md` |
| Adding image files | `public/images/<section>/<slug>/` (see `public/images/README.md`) |
| Name, tagline, nav, email, LinkedIn, indexing on/off | `src/data/site.ts` |
| Home page (switchable designs) | `src/components/home/` (see its README); pick one in `src/data/site.ts` → `home` |
| Resume page | `src/pages/resume.md` |
| Contact page | `src/pages/contact.astro` |
| Page structure / markup | `src/pages/`, `src/layouts/`, `src/components/` (see `src/README.md`) |
| Styles | `src/styles/tokens.css` (values), `src/styles/global.css` (layout) |
| Build/deploy, URL format, security policy (CSP) | `astro.config.mjs`, `.github/workflows/deploy.yml` |
| What search engines and AI agents see (meta, JSON-LD, robots.txt, llms.txt) | `docs/seo.md`; code in `src/lib/schema.ts`, `src/lib/llms.ts`, `src/pages/*.txt.ts` |

## Conventions

- **Planning docs and drafts are local-only** (in `.gitignore`): `drafts/`, `docs/reference/`, `docs/design/`, `docs/decisions.md`, `docs/brand-voice.md`, `docs/seo.md`. Read and update them as usual, but they won't appear in commits or on GitHub. Never `git add -f` them.
- **Drafts workflow:** Pete writes copy in `drafts/<section>/<slug>.md` (header: Status / Role / Title / Search description / Skills, then `---`, then body). When he says "publish my ready drafts", apply every file with `Status: ready`:
  - Header → frontmatter: Eyebrow → `tile.subtitle`, Role → `role` (and the body's `**Role:**` line), Title → `title`, Search description → `seoDescription`, Skills → `keywords`. Leave the rest of tile, media, order, links and slugVerified as they are. Blank header fields mean no change.
  - Body → markdown body, structured per the case-study format below.
  - Build, then show the preview. After publishing, set the draft's status to `published YYYY-MM-DD`.
  - `drafts/` is git-ignored. Never add it to commits.
- **Case-study heading:** the eyebrow is `tile.subtitle`, and the big H1 is `tile.label` (the client), mirroring the tile. `title` (the full project name) is used for `<title>`, search, tile hover, arrows, JSON-LD and llms.txt, so keep it unique and 60 characters or fewer with the " — Peter Magulak" suffix. The role is NOT in the heading: it's the first line of the copy's details block (`**Role:** …<br>` above Core Domain), and also in frontmatter `role` for structured data. Illustration galleries keep `title` as the H1 with no eyebrow.
- **Case-study format:** Pete wants every case study in the Comcast Business format. When he sends new copy, structure it from `src/content/work/_case-study-template.md` (headline, Executive Summary, Skill Matrix table, Key Initiatives, Workflow steps). Role goes in frontmatter AND as the `**Role:**` line above Core Domain. Any JSON-LD he pastes goes into `seoDescription` + `keywords`, not onto the page. Keep his wording and only fix grammar. Say what you changed.
- **Content lives in markdown, not components.** Never hard-code project copy in `.astro` files.
- **URLs are flat** (`/paradise`, not `/work/paradise`) to match live Squarespace URLs. The file name is the slug. Don't rename a content file without updating `docs/seo.md`.
- **Always link through `url()`** from `src/lib/url.ts`. The site runs under `/petemag/` during preview, and hard-coded `/` links will break. Use `pagePath(Astro.url)` for the current page's clean path.
- **Security policy (CSP):** every page only loads scripts, styles, fonts, frames and images from sources listed in `astro.config.mjs` → `security.csp`. Adding a third-party embed or font service means adding its domain there, or it will silently fail on the live site (the CSP isn't enforced in `npm run dev`; test with `npm run build && npm run preview`). Don't use inline `style="…"` attributes or `is:inline` scripts; the CSP blocks them. (The JSON-LD `<script type="application/ld+json">` in `BaseLayout` is data, not code, and is the one allowed exception.)
- **Security setup:**
  - Commits in this repo are signed as `Peter Magulak <268468626+PeteweeJP@users.noreply.github.com>` (repo-local git config) so no personal email or Mac name leaks. Don't change it.
  - GitHub Actions are pinned to commit SHAs (version in a comment); Dependabot proposes updates. Keep them pinned.
  - `src/integrations/image-privacy.mjs` fails the build if a JPEG has GPS data.
  - `src/integrations/csp-guard.mjs` fails the build if any page has an inline `style=""` attribute (markdown table alignment `| :--- |` is the usual cause).
  - Pushing uses Pete's fine-grained token (petemag repo only) from macOS Keychain. If a push fails on authentication, don't retry in a loop: have Pete follow "Renewing the token" in `docs/how-to-edit.md`.
- **Content is validated** by `src/content.config.ts`: links must be http(s), image paths must start with `images/`, Vimeo IDs must be numbers. Keep those rules when editing the schema.
- **Change styles through tokens** in `tokens.css` first. Add new CSS to `global.css` only for new layouts.
- Unknown or unreadable copy is marked `<!-- TODO … -->` in content files. Don't invent facts; ask Pete.
- After meaningful changes, add a line to `CHANGELOG.md`. Record decisions in `docs/decisions.md`.
- Every folder with a `README.md` explains itself. Keep those short and current when you change the folder.

## Commands

Requires Node 22.12+ (Pete's Mac has Node 24 at /usr/local/bin).

```
npm install      # first time only
npm run dev      # local preview at http://localhost:4321/petemag (Astro 7 may detach it to the background;
                 # manage with `npx astro dev status | stop | logs`)
npm run build    # production build into dist/
npm run check    # type and content check (CI runs this before every deploy)
npm run audit    # after build: titles, descriptions, h1s, alt text, links, JSON-LD, contrast, local-only files
```

Running `npm run build` while the dev server is up can leave the preview serving stale content. Before giving Pete a preview link, `curl` the page and confirm the change is there; if it isn't, restart the server (`npx astro dev stop`, then `npm run dev`).

Don't delete `.astro/` while the dev server is running: it holds the content cache and the server's status file, so pages 404 and `astro dev status` loses track. If you must, restart the server afterwards (`kill` its pid, then `npm run dev`).

Pushing to `main` builds and deploys automatically via GitHub Actions.
