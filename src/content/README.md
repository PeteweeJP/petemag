# src/content

One markdown file per page, grouped by section. **The file name is the URL:** `work/paradise.md` → `petemag.com/paradise`.

- `work/`: 25 case studies (Work grid)
- `apps/`: 3 case studies (Apps grid)
- `illustration/`: 4 galleries (Illustration grid; no description text)

## Anatomy of a file

```yaml
---
title: "Paradise Pancakes Campaign"   # page title (also the hover text on the tile)
client: "IHOP"
tile:
  label: "IHOP"                        # client name; shown as text until the logo file exists
  logo: images/work/paradise/logo.png  # client logo on the tile (SVG or transparent PNG)
  subtitle: "Paradise Pancakes"        # letter-spaced line under it
  image: images/work/paradise/tile.jpg
role: "Creative Lead"
order: 15                              # position in the grid
links:                                 # optional
  - label: Website
    url: "https://…"
media:                                 # right column, top to bottom
  - type: video
    vimeo: "123456789"
    alt: "Facebook Live video"
  - src: images/work/paradise/01.jpg
    alt: "Laptop-on-the-beach mockup"
    zoom: true                         # optional: click to open full size (use for long screenshots)
seoDescription: "…"                    # optional; otherwise the first paragraph is used
slugVerified: true                     # file name matches the live Squarespace URL
draft: false                           # true hides it everywhere
---

Description paragraphs in plain markdown.
```

## If the build fails
The content is checked on every build. A mistake stops the build with a message naming the file and field, such as `links.0.url: must be a full http:// or https:// URL`. Links must start with `https://`, image paths with `images/`, and Vimeo IDs are just the number.

## Case-study format (the standard for every project)
Pete writes copy in `drafts/` (see `drafts/README.md`), and Claude applies it here.
New case-study copy follows the Comcast Business page, using the template **`work/_case-study-template.md`**. It never publishes, because files starting with `_` are ignored. The sections are: headline → Executive Summary → Skill Matrix table → Key Initiatives (A/B/C) → Workflow steps. The role shows above the title automatically, so the copy never repeats it. Put search text in `seoDescription` and skills in `keywords`.

## Tables
Markdown tables work in case-study text. Write the divider row as `| --- | --- |`, **not** `| :--- |`. Alignment markers turn into inline styles, which the site's security policy blocks, so the build stops with a message saying so.

## Common edits
- **Reorder the grid:** change `order:` numbers.
- **Hide a project:** `draft: true`.
- **Make an image zoomable:** add `zoom: true` under that media item.
- **Add a project:** copy an existing file, rename it (this sets the URL), and update the fields.
- **Find what's unfinished:** `grep -rn TODO src/content`.

Descriptions marked `<!-- TODO: paraphrase … -->` came from the audit, not the original site. Replace them with the real copy or rewrite them to match `docs/brand-voice.md`.
