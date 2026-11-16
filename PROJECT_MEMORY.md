# PROJECT MEMORY - Build Agent Ai (nongton)

Last Updated: 2026-11-17 01:31

## 1. Architecture & Key Decisions
- Main Workspace: `D:\รวมไฟล์\งาน\AntiyCode\Build Agent Ai`
- Coding Standard: Clean Code (Pragmatic Standards: SRP, DRY, KISS, YAGNI, Guard Clauses, max 20 lines/function, self-documenting names)
- AI Integration:
  - Connected Claude AppData via Junction (`Claude-AppData`) and `Build-Agent-Claude.code-workspace`
  - Connected Gemini App, AppData, and Config (`.gemini`) via Junctions (`Gemini-App`, `Gemini-AppData`, `Gemini-Config`) and `Build-Agent-Gemini.code-workspace`
  - Analyzed `rykerzz-multi-agent` v1.0.0 (installed globally in npm; nongton decided NOT to initialize it inside this workspace root)
- Team Workflow: 6 sequential roles with QA Gates after each step:
  `Lead (หัวหน้า) > Deputy (รองหัวหน้า) > Design UX/UI > Backend > Frontend > QA`
- Backup Policy: Every file modification must first be backed up to `.backups/YYYYMMDD-HHMM/`. Deletions are forbidden; move obsolete files to `_to_delete/`.
- Team Rules installed permanently as workspace rule file `AGENTS.md` (root). Auto-loaded by Antigravity every session. Source of truth for team behavior; edit only with nongton's approval (backup first).
- Rule conflict resolved (2026-11-17, approved by nongton): `AGENTS.md` takes precedence over global `GEMINI.md` (no emojis, Thai explanation, 6-role workflow, ALIGNMENT). Useful engineering standards from `GEMINI.md` (Clean Code, security checks, verification) may still be applied when needed.
- 2026-11-16 23:56 — Added to `AGENTS.md` (approved by nongton): HARD RULE 8 (junction folders are read-only), PROJECT STRUCTURE (`projects/<project-name>/` with per-project `PROJECT_MEMORY.md` + `README.md`), DEFAULT TECH STACK (HTML/CSS/JS -> Vite -> Phaser+Vite -> Godot; must be confirmed in ALIGNMENT).
- 2026-11-17 00:02 — Added `COMMAND TRIGGER: nongton` to `AGENTS.md` and `.agents/skills/nongton/SKILL.md`: starting a prompt with `nongton` (or `/nongton`) activates the full 6-role Agent AI workflow and allows modifying code/prompts; messages without `nongton` stay in Read-Only consultation mode. Also extracted `PROJECT STRUCTURE` and `DEFAULT TECH STACK` into `.agents/rules/project-standards.md` (`trigger: always_on`) to keep `AGENTS.md` well under the 24,000-byte rule limit.
- 2026-11-17 00:13 — Installed `Git.MinGit` (v2.56.1) and `Vercel CLI` (v65.16.0). Created `.gitignore` and `.vercelignore` excluding read-only junctions (`Claude-AppData/`, `Gemini-*`), `.backups/`, `.env`, `Gemini.lnk`, and `*.code-workspace`. Initialized local Git repo (`main` branch). Vercel CLI is authenticated (`klakarkhaycturwithy-4698`).
- 2026-11-17 00:31 — Configured Git `user.name` (`nongton`) and `user.email` locally/globally (email not stored in memory per HARD RULE 6). Created initial local Git commit on `main`.
- 2026-11-17 00:47 — Installed `GitHub.cli` (`gh` v2.104.0), authenticated as `klakarkhaycturwithy-sketch`, ran `gh auth setup-git`, connected remote `origin` (`https://github.com/klakarkhaycturwithy-sketch/build-agent-ai.git`), and pushed initial commit `b169204` (`main -> main`) with nongton's approval.
- 2026-11-17 01:21 — Changed `klakarkhaycturwithy-sketch/build-agent-ai` repository visibility on GitHub to `PUBLIC` as requested by nongton (after verifying zero secrets/tokens in committed tree).
- 2026-11-17 01:27 — Verified `test-nongton-web` test run (PASS: `AGENTS.md` + `.agents/` worked cleanly, built `resume-landing` following Clean Code and project standards).
- 2026-11-17 01:31 — Per nongton's architectural decision, `Build Agent Ai` is kept strictly for Agent AI development; `test-nongton-web` remains separate outside this repository, and the temporary copy in `projects/resume-landing/` was moved to `_to_delete/resume-landing-imported-20261117/` (not deleted).
- Memory split: this root file = user preferences + project index. Project details go to `projects/<project-name>/PROJECT_MEMORY.md`.

## Project Index
- (none yet — `Build Agent Ai` stays clean for Agent AI development; standalone test `test-nongton-web` is kept separate)

## 2. Data Structures & APIs
- Pending first feature/project specification from nongton.
- Secrets Policy: Never store API keys, tokens, or sensitive values in code or memory. Store only variable names (e.g., `API_KEY_NAME`) and load values from `.env`.

## 3. Bugs Encountered & Fixes
- None recorded yet.

## 4. Reusable Components & Templates
- `Build-Agent-Claude.code-workspace`: Multi-folder workspace template for Claude configuration.
- `Build-Agent-Gemini.code-workspace`: Multi-folder workspace template for Gemini configuration.

## 5. User Profile & Preferences (nongton)
- Name: `nongton` (Student, beginner programmer, enjoys gaming and web development, usually works from ~19:00 onwards).
- Hardware & OS: Windows, AMD Ryzen 5 5600, 32 GB RAM, AMD Radeon RX Vega GPU (Strictly NO CUDA/NVIDIA-only tools).
- Tools & Platforms: Antigravity IDE, GitHub, Vercel, Netlify, Google Drive, Figma.
- Design Style: Clean, simple, high quality (เรียบง่ายแต่มีคุณภาพ). Confirmed preference from `resume-landing` test: **Minimal Light** aesthetic (warm cream `#FAF8F5` background, white cards `#FFFFFF`, deep teal `#0F766E` accent, Inter + Noto Sans Thai fonts) and **bilingual TH/EN toggle** on personal web pages.
- Communication Style:
  - Friendly, direct, easy to understand, no emojis.
  - Explain in Thai; write code, filenames, and code comments in English.
  - Always explain technical terms briefly in parentheses and teach the underlying concept briefly.
  - Always include examples and comparisons when introducing new concepts.
  - Report progress at key milestones only (Plan complete, Implementation complete, Testing complete).

## 6. Alignment & Past Misunderstandings to Avoid
- Biggest frustration: Receiving output that does not match what was asked for.
- Mandatory Alignment Protocol before non-trivial tasks:
  1. Summarize understanding in 3-5 simple lines ("nongton อยากได้ ___ ใช้สำหรับ ___ หน้าตา/พฤติกรรมประมาณ ___").
  2. Define testable success criteria ("กดปุ่ม X แล้วเกิด Y").
  3. Ask clarifying questions in a single batch with options and a recommended choice.
  4. Wait for confirmation before starting implementation.
  5. Provide a wireframe or small sample first for visual tasks.

