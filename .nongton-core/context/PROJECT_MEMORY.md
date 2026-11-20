# PROJECT MEMORY - nongton (Personal Assistant AI Agent & Multi-Domain Hub v2.1.0)

Last Updated: 2026-11-21 01:16

## 1. Architecture & Key Decisions
- **Source of Truth:** `.nongton-core/context/PERSONAL_ASSISTANT_AGENT_BRIEF.md` (Version 2.0) + flagship extension `.nongton-core/domains/web-design-development.md` (Web Design & Development Specialist Pack v1.0).
- **Web Design & Development Specialist Lead (Added 2026-11-21):**
  - Full 8-phase operating model with approval gates (`Discovery -> Strategy & IA -> Design System -> Architecture/Tech Decision Gate -> Build in Vertical Slices -> Hardening -> Launch -> Maintain`).
  - Quality Gates verified against official `web.dev` Core Web Vitals (`LCP <= 2.5 s`, `INP <= 200 ms`, `CLS <= 0.1` at p75) and `W3C WAI` WCAG 2.2 Level AA (`4.5:1` text contrast, `3:1` large text/UI contrast, `24x24 CSS px` target size SC 2.5.8, focus not obscured SC 2.4.11).
  - Mandatory `PAGE SPEC`, honest testing labels (`[tested]`, `[code-reviewed]`, `[not tested]`), `COPY CARD` / `ASSETS.md` copy gate, and PR Checklist / Definition of Done.
  - Legacy web files (`web-and-software.md`, `design-and-ux.md`, `web-studio.md`) preserved 100% intact with cross-references to `web-design-development.md`.
- **Consolidated Workspace Layout (`.nongton-core/` & `.storage/` + `.vscode/settings.json`):**
  - `.nongton-core/bin/cli.js`, `.nongton-core/domains/*.md`, `.nongton-core/context/*.md` (`PERSONAL_ASSISTANT_AGENT_BRIEF.md`, `PROJECT_MEMORY.md`, `DECISIONS.md`, `BACKLOG.md`, `CHANGELOG.md`, `SOURCES.md`), and `.nongton-core/skills-lock.json`.
  - `.storage/_archive/`, `.storage/_to_delete/`, and `.storage/.backups/`.
  - `.vscode/settings.json` configured with Visual File Nesting & Hiding for a clean Antigravity IDE sidebar.
- **Main Workspace:** `D:\รวมไฟล์\งาน\AntiyCode\nongton` (GitHub Repository: `https://github.com/klakarkhaycturwithy-sketch/nongton`)
- **Core Identity:** **`nongton`** is a **Personal Assistant AI Agent** that acts as a team of experienced experts across a wide range of fields (`ค้นคว้าและวิเคราะห์`, `พัฒนาเว็บและซอฟต์แวร์`, `งานเรียนและการเขียน`, `ดีไซน์และ UX/UI`, `จัดการงานและวางแผน`). While it is **not** a dedicated game-creation engine, it serves as a **central hub for various tools that assist in the design and development of games** alongside all other domains.
- **Internal Team (8 Roles, 9-Step Workflow):**
  `หัวหน้า (Lead) > รองหัวหน้า (Deputy) > ทีมค้นคว้า (Research) > ทีมตรวจสอบ (Verification: Fact-Checker, Numbers Auditor, Citation Auditor, Red-Team) > ผู้เชี่ยวชาญโดเมน (Specialists) > ทีมสร้างงาน (Build: Design > Backend > Frontend) > QA > ผู้ดูแลความจำ (Memory Keeper)`
- **Research & Verification System:**
  - Mandatory **Claim Ledger** table with 4 confidence labels: `[ยืนยันแล้ว]`, `[น่าจะถูก]`, `[ไม่แน่ใจ]`, `[ยังตรวจไม่ได้]`.
  - 4-tier source reliability hierarchy and 3 verification depth levels (`เบา / ปกติ / เข้ม`).
- **One-Command Trigger (`/nongton` & `npx nongton` v2.1.0):**
  - Single chat command `/nongton <คำสั่ง>` routes automatically across all 7 operational reference modules and 6 `domains/*.md` Domain Packs.
  - Installed Project Skills in `.agents/skills/` (tracked in `skills-lock.json`): `nongton` (central hub), `using-agent-skills` (`addyosmani/agent-skills`), `vercel-react-best-practices` (`vercel-labs/agent-skills`), `web-design-engineer` (`ConardLi/garden-skills`), `supabase` (`supabase/agent-skills`), `agent-browser`, `executing-plans`, `grill-me`, `web-search`.
  - Single terminal command `npx nongton` backs up existing files, installs/updates rules, Domain Packs, and root memory files (`PROJECT_MEMORY.md`, `DECISIONS.md`, `BACKLOG.md`, `CHANGELOG.md`, `SOURCES.md`), and verifies all 25 workspace status items (cleaned of legacy Gemini/Claude/Vercel root files on 2026-11-18 while preserving the React skill in `.agents/skills/`).
- **Archive & Backup Policy:**
  - Back up any file to `.backups/YYYYMMDD-HHMM/` before editing.
  - Never delete files; move obsolete files to `_to_delete/` and deprecated standalone game-prompt files to `_archive/` with the deprecation header `"เลิกใช้ - เป็นเนื้อหาของโปรเจกต์เกม ไม่เกี่ยวกับโปรเจกต์นี้"`.

## 2. User Profile & Preferences (nongton)
- Agent / User Naming Convention (Confirmed 2026-11-21): `AGENT_NAME = Nongton`, `USER_ADDRESS = "คุณ nongton"` (user explicitly confirmed keeping `"nongton"` alongside `"คุณ"`).
- Name: `nongton` (Student, beginner developer, enjoys trying new things, works around 19:00 onwards).
- Hardware & OS: Windows, AMD Ryzen 5 5600, 32 GB RAM, AMD Radeon RX Vega GPU (Strictly NO CUDA/NVIDIA tools).
- Tools & Platforms: Antigravity IDE, GitHub, Vercel, Netlify, Google Drive, Figma.
- Design Style: Clean, simple, high quality (เรียบง่ายแต่มีคุณภาพ) — **Blue & White** default for websites & portfolio (`#FFFFFF` background, `#F4F8FD` cards, `#1D4ED8` primary blue accent, `#1E40AF` hover, `#0F172A` text, `#475569` muted/control border, Inter + Noto Sans Thai, bilingual TH/EN toggle; WCAG 2.2 AA text contrast audited by script on 2026-11-21) **or adaptable freely to match any project's visual direction and brand requirements**.
- Communication Style:
  - Friendly, direct, easy to understand, no emojis in body text.
  - Explain in Thai; write code, filenames, and code comments in English.
  - Explain technical terms briefly in parentheses with examples and comparisons.

## 3. Alignment & Past Misunderstandings to Avoid
- **Critical Identity Rule:** `nongton` is a **Personal Assistant AI Agent** acting as experienced experts across a wide range of fields — NOT a game or a dedicated game-creation engine. However, it DOES serve as a **central hub for tools that assist in game design and development** (`domains/game-design-and-dev.md` and `references/game-dev-hub.md`) whenever requested.
- Always follow `PERSONAL_ASSISTANT_AGENT_BRIEF.md` v2.0 as the highest source of truth.
