# Home page variants

Each file is one complete home page design. `src/data/site.ts` → `home` picks which one is live, and `src/pages/index.astro` renders it.

| Variant | File | Status |
|---|---|---|
| `split` | `HomeSplit.astro` | The original Squarespace home (50/50 portrait + intro). Live until the new one is ready; kept as a fallback. |

To add a variant: create `Home<Name>.astro` here, register it in `src/pages/index.astro`, and add it to this table.
