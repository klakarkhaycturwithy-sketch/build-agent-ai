---
name: deploy-helper
description: >-
  Safe GitHub and Vercel deployment workflow for nongton's 6-role team.
  Use when nongton asks to connect Git, push to GitHub, or deploy a project to Vercel.
---

# Deploy Helper — Safe GitHub & Vercel Workflow

Follow these mandatory safety checks whenever preparing, pushing, or deploying a project:

## 1. Pre-Flight Security Audit (QA Gate before Git/Vercel)
1. **Verify `.gitignore` & `.vercelignore`**:
   - Must exclude `Claude-AppData/`, `Gemini-*`, `.backups/`, `_to_delete/`, `.env`, `.env.*`, `*.code-workspace`, `*.lnk`, and `node_modules/`.
2. **Secret Scan**:
   - Scan staged files (`git status --short` and `git diff`) to guarantee zero API keys, tokens, passwords, or private credentials are included (`HARD RULE 6`).
3. **Target Scope Check**:
   - For web deployments on Vercel, deploy from the specific project subfolder `projects/<project-name>/` (where `index.html` or `package.json` lives) rather than the workspace root.

## 2. Explicit Approval Gate (`HARD RULE 5`)
- **Local preparation is autonomous**: Creating `.gitignore`, `.vercelignore`, running `git init`, `git add`, and local `git commit` can be prepared after verification.
- **External actions require explicit approval**: Always state clearly which files/commits will be sent and wait for nongton to confirm before executing `git push` or `vercel --prod`.

## 3. Post-Deploy Verification
- Verify `git status -sb` confirms branch sync (`main...origin/main`).
- For Vercel deployments, provide the live `.vercel.app` URL and test steps for nongton.

