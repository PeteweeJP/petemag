---
name: add-images
description: Bring new images into the petemag site (tile backgrounds, client logos, case-study media, the home portrait) by checking file type and privacy, compressing, renaming to the right slot, writing alt text, and wiring them into the content file. Use when Pete says he added, dropped or replaced images, or asks to put an image on a page.
---

# Add images

Images live in `public/images/<section>/<slug>/` (see `public/images/README.md`). Slots:
- `tile.jpg`: grid tile background
- `logo.png` (or `.svg`): client logo on the tile
- `01.jpg`, `02.jpg`, …: case-study media, top to bottom, as listed in the content file's `media:`
- `public/images/home/portrait.jpg`: home page photo

## 1. Find what's new

```bash
cd ~/Desktop/MySite && git status --short --untracked-files=all public/images
```

If nothing is new, check `~/Desktop` and `~/Downloads` for recently added images (`find … -mtime -1`) and ask Pete which he meant. **Look at every image** (open it with the Read tool) before using it.

## 2. Check each file

```bash
file <img>                                    # real format; a ".jpg" may really be a PNG
sips -g pixelWidth -g pixelHeight <img>
ls -l <img>                                   # size
node -e "import('./src/integrations/image-privacy.mjs').then(({hasGps})=>console.log(hasGps(require('fs').readFileSync('<img>'))))"
mdls -name kMDItemAcquisitionMake -name kMDItemLatitude <img>
```

- **Wrong format** (a PNG named .jpg, or HEIC): convert to a real JPEG with `sips -s format jpeg -s formatOptions 85 <in> --out <out>`. Logos stay PNG or SVG.
- **GPS data present:** the build refuses the photo. Re-encoding with sips usually drops it; re-check afterwards. If it's still there, tell Pete how to remove it in Preview (Tools → Show Inspector → ⓘ → GPS → Remove Location Info).
- **Size:** aim for 500 KB or less and at most ~2000px wide. Try `sips -s formatOptions 82`. If the "compressed" file comes out **larger** than the original, keep the original.
- **Low resolution:** under ~1200px wide for full-width media or the portrait will look soft on large screens. Use it, but tell Pete.

## 3. Place and name it

- Rename to its slot (`01.jpg`, `tile.jpg`, `portrait.jpg`…). Pete's filenames rarely match.
- **Replacing an existing image:** move the old file and Pete's untouched original to `~/Desktop/MySite-originals/` with a descriptive name. Never delete Pete's files; skip exact duplicates (`cmp`).
- The project folder must contain only files the site uses, so the unused originals don't get published.

## 4. Wire it in

- **Media images:** make sure the content file's `media:` list has an entry with this `src`. Rewrite its `alt` to describe what the image actually shows, specifically ("IHOP 'N Go checkout: pickup or delivery step", not "screenshot").
- Long full-page screenshots: add `zoom: true` so visitors can open them full size.
- **Portrait:** update the alt text in `src/components/home/HomeSplit.astro` to describe the new photo.
- Tile and logo images need no content change; the file name is enough.

## 5. Check and preview

```bash
export PATH="/usr/local/bin:$PATH"
npm run build && npm run audit
```

Give Pete the preview link and a short list of:
- where each image went
- anything converted, compressed or low resolution
- where his originals are (`~/Desktop/MySite-originals/`)

**Wait for "publish"**, then use the `release` skill.
