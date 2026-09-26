# How to edit the site

Quick reference for adding images, changing copy and styles, previewing, and publishing.
Each change follows the same loop: **edit → preview (optional) → publish**.

Or skip all of this and ask Claude: "I dropped the IHOP images in, wire them up and publish."

---

## 1. Adding images

All images go in `public/images/`, one folder per project. The folder name matches the project's file name
(`src/content/work/paradise.md` → `public/images/work/paradise/`).

| File | Where it appears |
|---|---|
| `tile.jpg` | Background photo on the grid tile |
| `logo.png` | Client logo on the tile (white or brand-colored, transparent background) |
| `01.jpg`, `02.jpg`, … | Images down the right side of the case study, top to bottom |
| `public/images/home/portrait.jpg` | Home page portrait |

The project's `.md` file lists which image goes in which slot:

```yaml
media:
  - src: images/work/paradise/01.jpg
    alt: "Laptop-on-the-beach mockup"      ← what this slot should show
```

**Steps**
1. Find the matching image.
2. Rename it to the slot's file name (`01.jpg`).
3. Drag it into the project's folder.

Until a file is there, the page shows a dashed placeholder box with the description.

**Adjustments** (in the project's `.md` file)
- **More or fewer images:** add or delete `- src:` entries. Keep the numbering in step with the files.
- **Reorder:** move entries up or down.
- **Click to zoom** (good for long screenshots): add `zoom: true` under the image.
  ```yaml
    - src: images/work/paradise/03.jpg
      alt: "IHOP homepage"
      zoom: true
  ```
- **Video:** put the number from the Vimeo URL (`vimeo.com/123456789`) in `vimeo: "123456789"`.

**File tips**
- JPG for photos and screenshots; PNG or SVG for logos. If a logo is `.svg`, change the `logo:` line to end in `.svg`.
- Keep images under about 2000px wide and 500 KB.

---

## 2. Changing copy

| To change… | Open |
|---|---|
| A case study's title, role, description, links | `src/content/work/<project>.md` (or `apps/`, `illustration/`) |
| Name, tagline, email, LinkedIn, menu | `src/data/site.ts` |
| Resume | `src/pages/resume.md` |
| Contact page text | `src/pages/contact.astro` |

A project file has two parts:

```yaml
---
title: "Paradise Pancakes Campaign"   ← page title and tile hover text
role: "Creative Lead"
order: 15                             ← position on the grid
links:
  - label: Website
    url: "https://…"                  ← fill in and the link appears
---

The description goes here, as plain paragraphs.   ← edit freely
```

- **Settings (between the `---` lines):** keep the `name: value` format and keep text in quotes.
- **Description (below the second `---`):** plain text, with a blank line between paragraphs.
- **TODO notes:** `<!-- TODO: … -->` lines are notes to you and never show on the site. Delete each once you've replaced the text.
- **Find everything unfinished:** press ⌘⇧F in VS Code and search for `TODO`.

---

## 3. Changing fonts and colors

Colors, spacing and font names are all in `src/styles/tokens.css`:

```css
--color-bg: #f8f8f8;      ← page background
--color-text: #333333;    ← main text
--font-display: 'Playfair Display', Georgia, serif;   ← headings
--font-ui: 'PT Sans', system-ui, sans-serif;          ← body and menu
```

**Changing a font takes two edits:**
1. Pick a font at fonts.google.com (e.g. "Inter").
2. In `src/layouts/BaseLayout.astro`, find the `fonts.googleapis.com` line and swap in the name: `family=Inter:wght@400;700`.
3. In `tokens.css`, change the name in `--font-ui` or `--font-display`.

If you skip step 2, the site quietly falls back to a default font.

---

## 4. Previewing locally (optional)

Needs Node, installed once from nodejs.org (the "LTS" button). Then in Terminal:

```
cd ~/Desktop/MySite
npm install        # first time only
npm run dev
```

Open http://localhost:4321/petemag. The preview updates each time you save a file. Press Ctrl+C in Terminal to stop it.

If a project file has a mistake, the terminal shows an error naming the file and the field. For example, `links.0.url: must be a full http:// or https:// URL` means the first link in that file is missing `https://`.

---

## 5. Publishing

```
cd ~/Desktop/MySite
git add -A
git commit -m "Describe what changed"
git push
```

The site updates in about two minutes at https://peteweejp.github.io/petemag/.
Check progress in the repo's **Actions** tab (green check = live).

**Push problems**
| Symptom | Fix |
|---|---|
| `Password authentication is not supported` | Paste a token (starts with `ghp_`) at the Password prompt, not your GitHub password. Make one at github.com/settings/tokens/new with `repo` + `workflow` ticked. |
| `note has already been taken` (making a token) | Use a new note name, or regenerate the existing token. |
| `without workflow scope` | The token needs the `workflow` box ticked. |
| Red ✗ on the deploy step | Settings → Pages → Source must be "GitHub Actions". Then click "Re-run all jobs". |
