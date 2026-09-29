# Home page variants

Each file is one complete home page design. `src/data/site.ts` → `home` picks which one is live, and `src/pages/index.astro` renders it.

| Variant | File | Status |
|---|---|---|
| `split` | `HomeSplit.astro` | Live. 50/50: looping work reel (4:5) with a pause button + role/name/tagline/nav. The portrait moved to the Resume page (2026-09-26). |

To add a variant: create `Home<Name>.astro` here, register it in `src/pages/index.astro`, and add it to this table.
