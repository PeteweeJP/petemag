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

Open http://localhost:4321/petemag. The preview updates each time you save a file.

Astro may run the preview **in the background**, handing the terminal straight back. It keeps running until you stop it or restart the Mac. These work either way (run them in `~/Desktop/MySite`):

| To… | Run |
|---|---|
| Check whether it's running | `npx astro dev status` |
| Stop it | `npx astro dev stop` (or Ctrl+C if the terminal is still busy with it) |
| See errors if the page won't load | `npx astro dev logs` |

**`ERR_CONNECTION_REFUSED` in the browser** means the preview isn't running. Run `npm run dev` again.

To see exactly what the live site will do, including its security policy, run `npm run build && npm run preview` instead.

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
| `Password authentication is not supported` or `Invalid username or token` | Paste your token (starts with `github_pat_`) at the Password prompt, not your GitHub password. Expired? See **Renewing the token** below. |
| `Permission denied` or `403` | The token is missing a permission. It needs **Contents** and **Workflows** set to *Read and write*, with access to the `petemag` repo. |
| `name has already been taken` (making a token) | Use a new token name, or regenerate the existing token. |
| Red ✗ on the deploy step | Settings → Pages → Source must be "GitHub Actions". Then click "Re-run all jobs". |
| Build fails with `These photos contain GPS location data` | A photo still says where it was taken. Open it in Preview → Tools → Show Inspector → ⓘ → GPS → **Remove Location Info**, save, and push again. Or ask Claude. |

### Renewing the token (when it expires or is replaced)
The token is a fine-grained token that can only touch the `petemag` repo. Your Mac stores it in Keychain, and Claude's pushes use the same stored token.

1. Go to **github.com/settings/personal-access-tokens** → your token → **Regenerate token**, or create a new one:
   - **Repository access:** Only select repositories → `petemag`
   - **Permissions → Repository:** Contents = *Read and write*, Workflows = *Read and write* (Metadata = Read-only is added automatically)
2. Copy the new token (starts with `github_pat_`).
3. Clear the old one from your Mac:
   ```
   printf "protocol=https\nhost=github.com\n\n" | git credential-osxkeychain erase
   ```
4. Run `git push` in `~/Desktop/MySite`. Username: `PeteweeJP`; Password: paste the token (⌘V, nothing shows) → Enter.
5. `Everything up-to-date` (or a normal push) means it worked, and Claude can push again.

---

## 6. Backups and setting up on another Mac

### What's backed up where
| What | Backed up by |
|---|---|
| Site content, code, `CLAUDE.md`, this guide | GitHub (every push) |
| Planning docs: `docs/reference/`, `docs/design/`, `decisions.md`, `brand-voice.md`, `seo.md` | **Only your Mac.** Keep a zip copy somewhere else. |
| Images in `public/images/` | GitHub, once committed |

### Refresh the planning-docs backup
Ask Claude: "zip my planning docs." Or run this in Terminal:
```
cd ~/Desktop/MySite
zip -r ~/Downloads/petemag-planning-docs-$(date +%F).zip docs/reference docs/design docs/decisions.md docs/brand-voice.md docs/seo.md -x '*.DS_Store'
```
Copy the zip to iCloud Drive, Google Drive or a USB drive. A backup that only lives on the same Mac doesn't help if the Mac dies.

### Set up the project on a new Mac (clone)
1. Install **VS Code**, **Node** (nodejs.org, LTS) and **Git** (run `git --version` in Terminal; macOS offers to install it).
2. In VS Code: **⌘⇧P** → type **Git: Clone** → Enter.
3. Paste `https://github.com/PeteweeJP/petemag.git` → Enter.
4. Choose where to put it (e.g. Desktop). VS Code creates a `petemag` folder there.
5. Click **Open** when VS Code asks.
6. **Terminal → New Terminal**, then run `npm install`.
7. Unzip your planning-docs backup and drag its `docs/` contents into the project's `docs/` folder.
8. The first `git push` asks for your GitHub username and a token (see section 5).

You don't need to clone on this Mac: `~/Desktop/MySite` is already your connected copy.
