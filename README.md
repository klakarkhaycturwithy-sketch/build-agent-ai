# nongton — 6-Role Game & Web Development AI Agent Studio (v1.1)

ชุดติดตั้งกฎและทักษะประจำทีมพัฒนาเกมและเว็บไซต์ 6 บทบาท (`หัวหน้า > รองหัวหน้า > Design UX/UI > Backend > Frontend > QA`) พร้อม **GAME DEVELOPMENT AGENT — MASTER PROMPT v1.1** สำหรับคุณ **nongton** (รองรับ Antigravity IDE, Claude Code และ Gemini)

---

## วิธีติดตั้งลงในโปรเจกต์ใหม่ (`npx`)

### 1. ติดตั้งผ่านคำสั่ง `nongton` ในเครื่อง หรือผ่าน GitHub โดยตรง
เปิด Terminal ในโฟลเดอร์โปรเจกต์ใหม่ที่ต้องการใช้งาน แล้วรันคำสั่งใดคำสั่งหนึ่งต่อไปนี้:

```bash
# ถ้ารันในเครื่องที่เชื่อม npm link ไว้แล้ว
npx nongton init

# สำหรับโปรเจกต์เกม (สร้างไฟล์ DECISIONS.md, GDD.md, BACKLOG.md, CHANGELOG.md, ASSETS.md, TESTLOG.md ให้ครบ)
npx nongton init --game

# หรือดึงตรงจาก GitHub ได้ทุกเครื่องทันที
npx github:klakarkhaycturwithy-sketch/build-agent-ai init --game
```

### 2. คำสั่งทั้งหมดของ CLI

| คำสั่ง | การทำงาน |
|---|---|
| `npx nongton init` | ติดตั้ง `AGENTS.md`, `CLAUDE.md`, `.agents/` (4 Rules + 4 Skills), `PROJECT_MEMORY.md`, `.gitignore`, `.vercelignore`, `projects/`, และ `_to_delete/` |
| `npx nongton init --game` | ติดตั้งเหมือน `init` พร้อมสร้างไฟล์เอกสารเกม 6 ไฟล์ (`DECISIONS.md`, `GDD.md`, `BACKLOG.md`, `CHANGELOG.md`, `ASSETS.md`, `TESTLOG.md`) |
| `npx nongton status` | ตรวจสอบว่าในโฟลเดอร์ปัจจุบันมีไฟล์กฎ, Skills, และไฟล์เอกสารเกมของ `nongton` ครบหรือยัง |
| `npx nongton update` | สำรองไฟล์กฎเดิมไว้ที่ `.backups/YYYYMMDD-HHMM/` ก่อน แล้วอัปเดต `AGENTS.md`, `CLAUDE.md` และ `.agents/` ให้เป็นเวอร์ชันล่าสุด (ใส่ `--game` เพื่อสร้างไฟล์เอกสารเกมด้วย) |
| `npx nongton --version` | แสดงหมายเลขเวอร์ชันปัจจุบัน (`1.1.0`) |

---

## กฎอัตโนมัติ (Rules) ใน `.agents/rules/`

1. **`project-standards.md`** — โครงสร้างโฟลเดอร์ `projects/<project-name>/`, Default Tech Stack, และดีไซน์ Minimal Light
2. **`game-dev-master.md`** — Game Dev Master Prompt v1.1 (ข้อ 1–5: บทบาทสตูดิโอ, บริบทผู้ใช้, โจทย์เกม Sniper Arena, Copy Gate, Technology Decision Gate)
3. **`game-dev-workflow-decisions.md`** — Game Dev Master Prompt v1.1 (ข้อ 6–10: กฎเหล็ก, Spec Card, สายงาน 6 บทบาท, ระดับการตัดสินใจ, คำถามกลุ่มที่ 1–4)
4. **`game-dev-qa-kickoff.md`** — Game Dev Master Prompt v1.1 (ข้อ 11–20: หลักการออกแบบเกมสไนเปอร์, แผน MVP 7 วัน, โครงสร้างไฟล์, QA Verification Labels, Teaching Mode, Unblock Mode, Kickoff Script)

## ทักษะ (Skills) ใน `.agents/skills/`

1. **`nongton`** — ตัวแปรคำสั่งหลัก พิมพ์ `nongton <คำสั่ง>`, `/nongton <คำสั่ง>`, หรือ `เริ่มเซสชัน` เพื่อเปิดใช้งานสายงาน 6 บทบาท
2. **`game-builder`** — ทักษะสตูดิโอพัฒนาเกมตาม Master Prompt v1.1 (Roblox Studio + Rojo, Godot, Web Three.js/Phaser/Canvas)
3. **`deploy-helper`** — ทักษะตรวจความปลอดภัย สแกนหาข้อมูลลับ และเตรียมส่งโค้ดขึ้น GitHub / Vercel
4. **`code-coach`** — ทักษะอธิบายโค้ดภาษาไทยสำหรับมือใหม่ เปรียบเทียบให้เห็นภาพ และช่วยคิดทางออกเมื่อตัน (Teaching & Unblock Mode)
