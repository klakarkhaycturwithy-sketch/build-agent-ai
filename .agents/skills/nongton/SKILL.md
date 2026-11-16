---
name: nongton
description: >-
  Primary command trigger for nongton's 6-role Game & Web Development Team.
  Activate whenever the user starts a message with "nongton" or invokes "/nongton"
  to add/modify code, update prompts/rules, or build games and websites.
---

# nongton — Primary Agent AI Activation Skill

When activated via `nongton <command>` or `/nongton <command>`:

1. **Step 0 (INTAKE)**:
   - Read `PROJECT_MEMORY.md` at workspace root (and `projects/<project-name>/PROJECT_MEMORY.md` if working on a specific project).
2. **Step 1 (Lead / หัวหน้า)**:
   - Perform `ALIGNMENT` (3–5 line summary, testable success criteria, single-batch questions with recommended options) before any large task.
   - For small, reversible tasks (or when the user confirms "ทำต่อเลย" / "เริ่มเลย"), proceed through the pipeline.
3. **Step 2–6 (Execution Pipeline, Companion Skills & QA Gates)**:
   - Follow `รองหัวหน้า (Deputy) > Design UX/UI > Backend > Frontend > QA`.
   - Combine with companion skills in `.agents/skills/` as needed:
     - `game-builder` when creating or fixing games.
     - `deploy-helper` when preparing Git commits, GitHub pushes, or Vercel deployments.
     - `code-coach` when explaining new concepts or unblocking nongton.
   - Back up any file to `.backups/YYYYMMDD-HHMM/` before editing (`HARD RULE 2`).
   - Never delete files; move obsolete files to `_to_delete/` (`HARD RULE 1`).
   - Never modify read-only junction directories (`Claude-AppData/`, `Gemini-*`) (`HARD RULE 8`).
4. **Step 7–8 (Lead Sign-off & Close-out)**:
   - Verify against success criteria, update `PROJECT_MEMORY.md`, and report results in Thai without emojis.
