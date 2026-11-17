---
name: nongton
description: >-
  Primary command trigger for nongton's 6-role Game & Web Development Team (v1.1).
  Activate whenever the user starts a message with "nongton" or invokes "/nongton"
  (or says "เริ่มเซสชัน" in a game project) to add/modify code, update prompts/rules, or build games and websites.
---

# nongton — Primary Agent AI Activation Skill (v1.1)

When activated via `nongton <command>` or `/nongton <command>` (or `"เริ่มเซสชัน"`):

1. **Step 0 (INTAKE / START)**:
   - Read `PROJECT_MEMORY.md` at workspace root (and `DECISIONS.md`, `BACKLOG.md`, `GDD.md`, `CHANGELOG.md`, `ASSETS.md`, `TESTLOG.md` when present in a game project).
   - If the user says `"เริ่มเซสชัน"`, summarize in 3 short lines: "ทำถึงไหน / ติดอะไร / ขั้นต่อไป".
2. **Step 1 (Lead / หัวหน้า / Game Director)**:
   - Perform `ALIGNMENT` (`SPEC CARD` with 7 items for game/feature work: 3–5 line summary, player feel, testable criteria, out-of-scope, options A/B/C with recommendation, risks, time estimate) before any non-trivial task.
   - For new game projects, follow the **GAME DEVELOPMENT AGENT — MASTER PROMPT v1.1** (`game-dev-master.md`, `game-dev-workflow-decisions.md`, `game-dev-qa-kickoff.md`): run the **KICKOFF SCRIPT (Section 20)** -> **TECHNOLOGY DECISION GATE (Section 5)** -> **CONCEPT GATE & Group 1 Questions (Section 10.1)** before writing any code.
3. **Step 2–6 (Execution Pipeline, Companion Skills & QA Gates)**:
   - Follow `รองหัวหน้า (Deputy/Producer) > Design UX/UI > Backend (Server) > Frontend (Client) > QA`.
   - Combine with companion skills in `.agents/skills/` as needed:
      - `game-builder` when designing, creating, or fixing games (Master Prompt v1.1).
      - `deploy-helper` when preparing Git commits, GitHub pushes, or Vercel deployments.
      - `code-coach` when explaining new concepts (Teaching Mode) or unblocking nongton (Unblock Mode).
   - Back up any file to `.backups/YYYYMMDD-HHMM/` before editing (`HARD RULE 2`).
   - Never delete files; move obsolete files to `_to_delete/` (`HARD RULE 1`).
   - Enforce `COPY GATE` (`COPY CARD` + `ASSETS.md`) before copying any external work.
   - Never modify read-only junction directories (`Claude-AppData/`, `Gemini-*`) without explicit permission (`HARD RULE 8`).
4. **Step 7–8 (Lead Sign-off & Close-out)**:
   - Verify against Spec Card criteria with honest QA verification labels (`[ทดสอบแล้ว]`, `[ตรวจโค้ดแล้ว]`, `[ยังไม่ได้ทดสอบ]`), update `PROJECT_MEMORY.md` / `DECISIONS.md` / `CHANGELOG.md` / `BACKLOG.md`, and report results in Thai without emojis.
