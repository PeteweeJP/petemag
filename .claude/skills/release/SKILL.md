---
name: release
description: Publish the petemag site by checking, auditing, committing, pushing, watching the GitHub Pages deploy, and confirming the change is live. Use when Pete says "publish" (after he has seen the preview), "push it live", "deploy", or "commit and publish".
---

# Release

Only run this after Pete has said **"publish"** (or clearly asked to deploy). It's outward-facing.

## 1. Gate: everything must pass

```bash
cd ~/Desktop/MySite && export PATH="/usr/local/bin:$PATH"
npm run check && npm run build && npm run audit
```

If anything fails, stop, fix it (or explain it to Pete), and don't push.

## 2. Review what's going out

```bash
git status --short
```

- Nothing under `drafts/`, `docs/reference/`, `docs/design/`, `docs/decisions.md`, `docs/brand-voice.md` or `docs/seo.md` may appear (the audit also checks this). **Never `git add -f`.**
- No stray files (originals, screenshots, `.DS_Store`). If something looks unintended, ask.
- `CHANGELOG.md` has a plain-language line under today's date for each meaningful change. Add it if it's missing.

## 3. Commit and push

```bash
git add -A
git commit -F - <<'EOF'
<Short summary in the imperative>

<A few lines on what changed and why>

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
GIT_TERMINAL_PROMPT=0 git push
```

Commits are signed as Peter Magulak with the GitHub noreply address (repo-local git config). Don't change it.

**If the push fails on authentication:** don't retry. Pete's fine-grained token has probably expired. Point him to `docs/how-to-edit.md` → "Renewing the token" and stop.

## 4. Watch the deploy

```bash
SHA=$(git rev-parse --short=7 HEAD)
for i in $(seq 1 36); do
  r=$(curl -s "https://api.github.com/repos/PeteweeJP/petemag/actions/runs?per_page=5" | python3 -c "
import sys,json
for r in json.load(sys.stdin)['workflow_runs']:
    if r['head_sha'].startswith('$SHA') and r['name']=='Deploy to GitHub Pages': print(r['status'], r['conclusion'], r['html_url']); break")
  case "$r" in completed*) break;; esac; sleep 10
done; echo "$r"
```

- `success`: continue.
- `failure` or `startup_failure`: read the error from the run page (`curl -sL <run url>`, then search the text for "error" or "not allowed") and the job annotations (`/actions/runs/<id>/jobs`, then `/check-runs/<job id>/annotations`). Known cause: repo settings require SHA-pinned actions, including actions nested inside other actions, so only use releases that pin their internals. Explain it to Pete in plain words before changing anything.

## 5. Confirm it's live

`curl` the pages that changed on `https://peteweejp.github.io/petemag/…` and check the specific change is there (a heading, an image URL and size, a CSS value).

Report to Pete in 3–5 lines:
- the commit
- a link to the deploy run
- what you verified on the live site
- "press ⌘⇧R if you still see the old version"
