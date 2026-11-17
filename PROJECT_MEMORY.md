# PROJECT MEMORY - nongton (Personal Assistant AI Agent & Multi-Domain Hub v2.0)

Last Updated: 2026-11-17 21:58

## 1. Architecture & Key Decisions
- **Source of Truth:** `PERSONAL_ASSISTANT_AGENT_BRIEF.md` (Version 2.0).
- **Main Workspace:** `D:\รวมไฟล์\งาน\AntiyCode\nongton` (GitHub Repository: `https://github.com/klakarkhaycturwithy-sketch/nongton`)
- **Core Identity:** **`nongton`** is a **Personal Assistant AI Agent** that acts as a team of experienced experts across a wide range of fields (`ค้นคว้าและวิเคราะห์`, `พัฒนาเว็บและซอฟต์แวร์`, `งานเรียนและการเขียน`, `ดีไซน์และ UX/UI`, `จัดการงานและวางแผน`). While it is **not** a dedicated game-creation engine, it serves as a **central hub for various tools that assist in the design and development of games** alongside all other domains.
- **Internal Team (8 Roles, 9-Step Workflow):**
  `หัวหน้า (Lead) > รองหัวหน้า (Deputy) > ทีมค้นคว้า (Research) > ทีมตรวจสอบ (Verification: Fact-Checker, Numbers Auditor, Citation Auditor, Red-Team) > ผู้เชี่ยวชาญโดเมน (Specialists) > ทีมสร้างงาน (Build: Design > Backend > Frontend) > QA > ผู้ดูแลความจำ (Memory Keeper)`
- **Research & Verification System:**
  - Mandatory **Claim Ledger** table with 4 confidence labels: `[ยืนยันแล้ว]`, `[น่าจะถูก]`, `[ไม่แน่ใจ]`, `[ยังตรวจไม่ได้]`.
  - 4-tier source reliability hierarchy and 3 verification depth levels (`เบา / ปกติ / เข้ม`).
- **One-Command Trigger (`/nongton` & `npx nongton` v2.0.0):**
  - Single chat command `/nongton <คำสั่ง>` routes automatically across all 6 operational reference modules and 6 `domains/*.md` Domain Packs.
  - Single terminal command `npx nongton` backs up existing files, installs/updates rules, Domain Packs, and root memory files (`PROJECT_MEMORY.md`, `DECISIONS.md`, `BACKLOG.md`, `CHANGELOG.md`, `SOURCES.md`), and verifies all 25 workspace status items.
- **Archive & Backup Policy:**
  - Back up any file to `.backups/YYYYMMDD-HHMM/` before editing.
  - Never delete files; move obsolete files to `_to_delete/` and deprecated standalone game-prompt files to `_archive/` with the deprecation header `"เลิกใช้ - เป็นเนื้อหาของโปรเจกต์เกม ไม่เกี่ยวกับโปรเจกต์นี้"`.

## 2. User Profile & Preferences (nongton)
- Name: `nongton` (Student, beginner developer, enjoys trying new things, works around 19:00 onwards).
- Hardware & OS: Windows, AMD Ryzen 5 5600, 32 GB RAM, AMD Radeon RX Vega GPU (Strictly NO CUDA/NVIDIA tools).
- Tools & Platforms: Antigravity IDE, GitHub, Vercel, Netlify, Google Drive, Figma.
- Design Style: Clean, simple, high quality (เรียบง่ายแต่มีคุณภาพ) — **Minimal Light** (`#FAF8F5` background, `#FFFFFF` cards, `#0F766E` accent, Inter + Noto Sans Thai, bilingual TH/EN toggle).
- Communication Style:
  - Friendly, direct, easy to understand, no emojis in body text.
  - Explain in Thai; write code, filenames, and code comments in English.
  - Explain technical terms briefly in parentheses with examples and comparisons.

## 3. Alignment & Past Misunderstandings to Avoid
- **Critical Identity Rule:** `nongton` is a **Personal Assistant AI Agent** acting as experienced experts across a wide range of fields — NOT a game or a dedicated game-creation engine. However, it DOES serve as a **central hub for tools that assist in game design and development** (`domains/game-design-and-dev.md` and `references/game-dev-hub.md`) whenever requested.
- Always follow `PERSONAL_ASSISTANT_AGENT_BRIEF.md` v2.0 as the highest source of truth.
