---
name: game-builder
description: >-
  Game Development Studio skill (Master Prompt v1.1) for nongton's 6-role team.
  Use when nongton asks to create, design, or fix a game (Roblox Studio + Rojo, Godot, Web Three.js/Phaser, or HTML5 Canvas).
  Enforces Technology Decision Gate, Concept Gate, Copy Gate, Spec Card, Server Authority, Safe Save Migration, and Teaching Mode.
---

# Game Builder — nongton Game Development Studio Skill (v1.1)

When building, designing, or updating a game for `nongton`, strictly follow the **GAME DEVELOPMENT AGENT — MASTER PROMPT v1.1** loaded from:
- `.agents/rules/game-dev-master.md` (Sections 1–5: Role, User Context, Project Brief, Copy Gate, Technology Decision Gate)
- `.agents/rules/game-dev-workflow-decisions.md` (Sections 6–10: Hard Rules, Spec Card Alignment, 6-Role Studio Workflow, Autonomy, Open Decisions Groups 1–4)
- `.agents/rules/game-dev-qa-kickoff.md` (Sections 11–20: Game Design Guidance, 7-Day MVP Plan, Files/Memory, QA Verification Labels, Teaching Mode, Unblock Mode, Kickoff Script)

## 1. Mandatory Gates Before Writing Any Game Code
1. **Technology Decision Gate (Section 5)**:
   - Present Option A (Roblox Studio + Luau + Rojo — Recommended for online arena MVP), Option B (Godot + GDScript), Option C (Web JS + Three.js/Babylon.js/Phaser), Option D (Unity/Unreal).
   - State realistic MVP 7-day scope constraints clearly and wait for nongton's decision.
2. **Concept Gate & Group 1 Decisions (Section 10.1)**:
   - Propose 3 distinct game concepts (including the Sniper Arena baseline), camera view (FPS vs TPS), tagline choice (A/B/custom), and project goal.
   - Do NOT ask about mood/era/story/art/audio until after Concept Gate is locked.
3. **Spec Card (Section 7)**:
   - Send a `SPEC CARD` (7 items) before implementing any non-trivial feature and wait for `"ตกลง"` or `"แก้ตรง ___"`.
4. **Copy Gate (Section 4)**:
   - Send a `COPY CARD` before replicating any external asset/design and log approved external assets in `ASSETS.md`.

## 2. Required Game Project Files (Section 13)
Ensure the following files exist at the game project root (can be scaffolded via `npx nongton init --game`):
- `PROJECT_MEMORY.md` — Architecture, reusable systems, user preferences, lessons learned
- `DECISIONS.md` — Decision log: Date | Topic | Options | Chosen | Reason
- `GDD.md` — Concise Game Design Document & weapon/economy balance tables
- `BACKLOG.md` — Feature/idea backlog: Proposed | Approved | Rejected | Done
- `CHANGELOG.md` — Session-by-session change history
- `ASSETS.md` — External asset registry: Name | Source | Creator | License | Conditions
- `TESTLOG.md` — QA results with verification labels (`[ทดสอบแล้ว]`, `[ตรวจโค้ดแล้ว]`, `[ยังไม่ได้ทดสอบ]`)

## 3. Core Engineering & Safety Rules for Games (Sections 6, 11, 14, 15)
- **Server Authority**: Hit detection, damage, currency, and inventory must be validated server-side.
- **Safe Save Schema & Migration**: Include schema version number, migration function from older versions, and atomic write-before-replace save handling.
- **Honest QA Labels**: If the agent cannot run the game inside Roblox Studio or Godot Editor directly, never claim `[ทดสอบแล้ว]`; use `[ตรวจโค้ดแล้ว]` or `[ยังไม่ได้ทดสอบในเกมจริง]` and provide a numbered step-by-step test guide for nongton.
- **Teaching Mode**: Explain new game engine terms (e.g., `server authority`, `hitscan`, `raycast`, `RemoteEvent`, `tween`) in Thai with comparisons to HTML/JS/Python, and offer an optional small homework tweak at the end.
