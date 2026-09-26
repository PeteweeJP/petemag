---
name: publish-drafts
description: Apply Pete's case-study copy from drafts/ (files marked "Status: ready") into the site, preview it, and release after Pete says "publish". Use when Pete says "publish my ready drafts", "apply my drafts", "update the case studies from drafts", or names a specific draft.
---

# Publish ready drafts

Pete writes case-study copy in `drafts/<work|apps>/<slug>.md`. This routine turns every draft marked `Status: ready` into site content. Read `drafts/README.md` and `src/content/work/_case-study-template.md` first if you haven't this session.

## 1. Find the ready drafts

```bash
cd ~/Desktop/MySite && grep -l '^Status: ready' drafts/work/*.md drafts/apps/*.md
```

If there are none, say so and list any drafts whose status isn't `draft` or `published …`. Then stop.

## 2. For each ready draft

Each draft has a header, a line containing only `---`, then the copy.

**Header → the matching `src/content/<section>/<slug>.md` frontmatter.** A blank header value means leave that field unchanged.

| Draft header | Frontmatter field | Notes |
|---|---|---|
| `Eyebrow:` | `tile.subtitle` | Also changes the tile on the grid. |
| `Role:` | `role` | Also becomes the `**Role:** …<br>` line (see below). |
| `Title:` | `title` | Full project name: browser tab, search, tile hover. Must be 60 characters or fewer including " — Peter Magulak" (so 44 or fewer on its own), and unique. |
| `Search description:` | `seoDescription` | 140–160 characters is ideal. |
| `Skills:` | `keywords` | Comma-separated → a YAML list. |

Never touch `tile.label`, `tile.logo`, `tile.image`, `media`, `order`, `links` or `slugVerified` from a draft.

**Copy → the markdown body**, structured like the template:
- The first `##` headline, then the details block, with `**Role:** <role><br>` as its **first** line, above Core Domain.
- Never put a "Client / Brand" line, a JSON-LD block, or a top-level `#` heading in the body. The page title comes from the tile.
- Table divider rows must be `| --- |`, never `| :--- |` (the build rejects alignment markers).
- ASCII diagrams become numbered lists.
- If Pete pasted JSON-LD, move its `description` into `seoDescription` and its skill list into `keywords`.
- **Keep Pete's wording.** Fix only grammar, tense and typos, and keep a list of every change to report.
- Remove any `<!-- … placeholder … -->` note once real copy replaces the placeholder.
- Don't invent results, numbers, roles or clients. If something is missing or unclear, leave a `<!-- TODO: … -->` and mention it.

## 3. Check and preview

```bash
export PATH="/usr/local/bin:$PATH"
npm run check && npm run build && npm run audit
```

All three must pass. Make sure the preview server is running (`npx astro dev status`; if it isn't, `npm run dev`), then give Pete the preview link for each updated page, `http://localhost:4321/petemag/<slug>`, with a short list of:
- what changed on each page (eyebrow, role, title, copy)
- every wording fix you made
- any TODOs left

**Stop here and wait for Pete to say "publish".**

## 4. After "publish"

Use the `release` skill. Once the deploy is confirmed live, set each published draft's first line to `Status: published YYYY-MM-DD` (today's date). Drafts are git-ignored, so this edit is never committed.

Add one line per page to `CHANGELOG.md` under today's date, for example: `- Case study copy updated from drafts: paradise, ihop-contest.`
