---
name: release
description: Publish the petemag site by checking, auditing, committing, deploying to Cloudflare, and confirming the change is live. Use when Pete says "publish" (after he has seen the preview), "push it live", "deploy", or "commit and publish".
---

# Release

Only run this after Pete has said **"publish"** (or clearly asked to deploy). It's outward-facing.

## 1. Gate: everything must pass

```bash
cd ~/Desktop/MySite && export PATH="/usr/local/bin:$PATH"
npm run check && npm run build && npm run audit
```

If anything fails, stop, fix it (or explain it to Pete), and don't deploy.

## 2. Review what's going out

```bash
git status --short
```

- Nothing under `drafts/`, `docs/reference/`, `docs/design/`, `docs/decisions.md`, `docs/brand-voice.md` or `docs/seo.md` may appear (the audit also checks this). **Never `git add -f`.**
- No stray files (originals, screenshots, `.DS_Store`). If something looks unintended, ask.
- `CHANGELOG.md` has a plain-language line under today's date for each meaningful change. Add it if it's missing.

## 3. Commit

```bash
git add -A
git commit -F - <<'MSG'
<Short summary in the imperative>

<A few lines on what changed and why>

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
MSG
```

Commits are signed as Peter Magulak with the GitHub noreply address (repo-local git config). Don't change it.

**GitHub backup:** as of 2026-10-05 GitHub has flagged Pete's account (profile, repo and old Pages site return 404 publicly). Check `curl -s -o /dev/null -w "%{http_code}" https://github.com/PeteweeJP/petemag`; only if it's `200`, also run `GIT_TERMINAL_PROMPT=0 git push` as a backup. If the push fails on authentication, don't retry: point Pete to `docs/how-to-edit.md` → "Renewing the token".

## 4. Deploy to Cloudflare

```bash
npm run deploy    # wrangler deploy: uploads dist/ (see wrangler.jsonc)
```

It prints `Uploaded … files` and the address `https://petemag.petemag.workers.dev`.

**If it fails with "not logged in" or an authentication error:** run `npx wrangler login`. It opens a Cloudflare page in Pete's browser; ask him to click **Allow**, then deploy again. Don't retry in a loop.

## 5. Confirm it's live

`curl` the pages that changed on `https://petemag.petemag.workers.dev/…` and check the specific change is there (a heading, an image URL and size, a CSS value). Changes are usually live within seconds.

Report to Pete in 3–5 lines:
- the commit
- what you verified on the live site
- "press ⌘⇧R if you still see the old version"
