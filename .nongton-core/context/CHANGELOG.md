# CHANGELOG (บันทึกการเปลี่ยนแปลงทุกเซสชัน)

## [2026-11-21] เปลี่ยนโทนสีเริ่มต้นของเว็บไซต์และพอร์ตโฟลิโอภายใต้ `/nongton` เป็น Blue & White (ขาว-น้ำเงิน)
- สำรองไฟล์ต้นฉบับทั้งหมด 11 ไฟล์ก่อนแก้ไขไว้ที่ `.storage/.backups/20261121-0116/`
- เปลี่ยนชุดสีเริ่มต้น (`Default Theme`) จาก `Minimal Light` (`#FAF8F5` / `#0F766E`) เป็น **`Blue & White`** (`#FFFFFF` พื้นหลังขาวสะอาด, `#F4F8FD` การ์ดขาวอมฟ้า, `#1D4ED8` น้ำเงินหลัก, `#1E40AF` โฮเวอร์, `#0F172A` ข้อความหลัก, `#475569` ข้อความรองและขอบอินพุต) พร้อมตรวจค่าความต่างสี WCAG 2.2 Level AA ด้วยสคริปต์ Node.js ครบทุกคู่สี (`6.28:1` ถึง `17.85:1`)
- อัปเดตโทนสีเริ่มต้นและตัวอย่างคำสั่งพอร์ตโฟลิโอให้ตรงกันทั้งระบบใน `AGENTS.md`, `README.md`, `.agents/rules/project-standards.md`, `.agents/skills/nongton/SKILL.md`, `.agents/skills/nongton/references/web-studio.md`, `.nongton-core/domains/web-design-development.md`, `.nongton-core/domains/design-and-ux.md`, `.nongton-core/bin/cli.js`, `PROJECT_MEMORY.md`, และ `DECISIONS.md` โดยไม่ลดขนาดไฟล์เดิม

## [2026-11-21] ติดตั้ง Web Design & Development Specialist Pack (v1.0) และยกระดับ Prompt หลักของ Nongton (Spec Card ตัวเลือก A)
- สำรองไฟล์ต้นฉบับทั้งหมด 14 ไฟล์ก่อนแก้ไขไว้ที่ `.storage/.backups/20261121-0101/`
- สร้าง `.nongton-core/domains/web-design-development.md` (Web Design & Development Specialist Pack v1.0 ครบ 15 หัวข้อ ปรับ Path ให้ตรงกับโครงสร้าง `.nongton-core/` และ `.storage/` พร้อมคำนวณ WCAG 2.2 contrast ratios จริงด้วย Node.js สำหรับโทน Minimal Light ค่าเริ่มต้นที่ปรับเปลี่ยนได้ตามงาน)
- ขยายและยกระดับ Prompt หลักโดยไม่ลดขนาดไฟล์เดิมใน `AGENTS.md` (เพิ่มข้อ 10 Web Design & Development Specialist Lead), `.agents/skills/nongton/SKILL.md`, `.agents/rules/project-standards.md`, `.nongton-core/context/PERSONAL_ASSISTANT_AGENT_BRIEF.md`, `.nongton-core/bin/cli.js`, และ `README.md`
- คงเนื้อหาไฟล์เว็บเดิมครบ 100% และเพิ่มลิงก์เชื่อมโยงไปยัง `web-design-development.md` ใน `.nongton-core/domains/web-and-software.md`, `.nongton-core/domains/design-and-ux.md`, และ `.agents/skills/nongton/references/web-studio.md`
- ตรวจสอบเกณฑ์มาตรฐาน Core Web Vitals (`web.dev`) และ WCAG 2.2 Level AA (`W3C WAI`) พร้อมอัปเดต `SOURCES.md`, `PROJECT_MEMORY.md`, `DECISIONS.md`, และ `BACKLOG.md`

## [2026-11-18] จัดระเบียบโครงสร้างโปรเจกต์แบบรวมศูนย์ `.nongton-core/` & `.storage/` พร้อมตั้งค่า `.vscode/settings.json` (Spec Card ตัวเลือก C)
- สำรองไฟล์ทั้งหมดก่อนย้ายและแก้ไขไว้ที่ `.storage/.backups/20261118-2218/`
- ย้าย `bin/`, `domains/`, `skills-lock.json`, และไฟล์ความจำทั้ง 6 ไฟล์ (`PERSONAL_ASSISTANT_AGENT_BRIEF.md`, `PROJECT_MEMORY.md`, `DECISIONS.md`, `BACKLOG.md`, `CHANGELOG.md`, `SOURCES.md`) เข้าสู่ `.nongton-core/` (โดยไฟล์ความจำอยู่ใน `.nongton-core/context/`)
- ย้าย `_archive/`, `_to_delete/`, และ `.backups/` เข้าสู่ `.storage/`
- สร้างไฟล์ `.vscode/settings.json` สำหรับทำ Visual File Nesting และซ่อนโฟลเดอร์ `.storage/` จากแถบด้านซ้ายของ Antigravity IDE
- อัปเดต Path อ้างอิงใน `.nongton-core/bin/cli.js`, `package.json`, `AGENTS.md`, `.agents/rules/project-standards.md`, `.agents/skills/nongton/SKILL.md`, `.agents/skills/nongton/references/session-manager.md`, `README.md`, และ `.gitignore` โดยไม่ลดขนาดไฟล์งานเดิม

## [2026-11-18] นำไฟล์และโฟลเดอร์ของ Gemini, Claude และ Vercel ที่ไม่จำเป็นออกจากหน้า Root ของโปรเจกต์
- สำรองไฟล์ทั้งหมดก่อนแก้ไข/ลบไว้ที่ `.backups/20261118-2141/`
- ลบไฟล์และโฟลเดอร์ที่ไม่จำเป็นออกจากหน้า Root ตามการอนุมัติใน Spec Card (ตัวเลือก B): `CLAUDE.md`, `.vercelignore`, `Gemini.lnk`, `Build-Agent-Claude.code-workspace`, `Build-Agent-Gemini.code-workspace`, `Claude-AppData/`, `Gemini-App/`, `Gemini-AppData/`, และ `Gemini-Config/`
- คงเก็บสกิล React (`.agents/skills/vercel-react-best-practices/`) ไว้ใน `.agents/skills/` สำหรับใช้เวลาเขียนเว็บ
- อัปเดต `bin/cli.js`, `package.json`, และ `.gitignore` ไม่ให้เรียกหาไฟล์ที่นำออกไปแล้ว และทดสอบ `node ./bin/cli.js status` ผ่านครบ 100%

## [2026-11-17] v2.1.0 — อัปเดตเวอร์ชันโปรเจกต์เป็น v2.1.0 และซิงก์ชุดสกิลเสริมครบ 8 สกิลขึ้น GitHub
- อัปเดตหมายเลขเวอร์ชันโปรเจกต์จาก `2.0.0` เป็น `2.1.0` (`v2.1.0`) ใน `package.json`, `README.md`, และ `PROJECT_MEMORY.md`
- ซิงก์ชุดสกิลเสริมทั้งหมดใน `.agents/skills/` และ `skills-lock.json` (`using-agent-skills`, `vercel-react-best-practices`, `web-design-engineer`, `supabase`, `agent-browser`, `executing-plans`, `grill-me`, `web-search`)
- สร้าง Git Tag `v2.1.0` และเผยแพร่ GitHub Release `v2.1.0` บน `https://github.com/klakarkhaycturwithy-sketch/nongton`

## [2026-11-17] ติดตั้งสกิลเสริม using-agent-skills และ vercel-react-best-practices ลงในโปรเจกต์
- สำรองไฟล์ `skills-lock.json`, `PROJECT_MEMORY.md`, และ `CHANGELOG.md` ไว้ที่ `.backups/20261117-2228/`
- ติดตั้งสกิล `using-agent-skills` จาก `https://github.com/addyosmani/agent-skills` ลงใน `.agents/skills/using-agent-skills/`
- ติดตั้งสกิล `vercel-react-best-practices` จาก `https://github.com/vercel-labs/agent-skills` ลงใน `.agents/skills/vercel-react-best-practices/`
- อัปเดต `skills-lock.json` และบันทึกสถานะใน `PROJECT_MEMORY.md`

## [2026-11-17] เปลี่ยนชื่องานบน GitHub และในโปรเจกต์จาก Build Agent Ai เป็น nongton
- เปลี่ยนชื่อ GitHub Repository จาก `klakarkhaycturwithy-sketch/build-agent-ai` เป็น `klakarkhaycturwithy-sketch/nongton` (`https://github.com/klakarkhaycturwithy-sketch/nongton`)
- อัปเดต URL ใน `.git/config`, `package.json`, และ `README.md` (`npx github:klakarkhaycturwithy-sketch/nongton`)
- อัปเดตชื่อโปรเจกต์และโฟลเดอร์ทำงานหลักใน `PROJECT_MEMORY.md`, `AGENTS.md`, `PERSONAL_ASSISTANT_AGENT_BRIEF.md`, และ `.agents/skills/nongton/references/master-brief-v2.0.md` เป็น `D:\รวมไฟล์\งาน\AntiyCode\nongton` โดยสำรองไฟล์ไว้ที่ `.backups/20261117-2156/`

## [2026-11-17] ขยายพื้นที่เก็บข้อมูลแบบไม่จำกัดโดยไม่ลดขนาดไฟล์เดิม (Expanded Unlimited Storage Vault)
- คืนค่าเนื้อหาฉบับเต็ม 100% ของ `AGENTS.md` และเพิ่มกฎเหล็กข้อ 10: **ห้ามย่อหรือลดขนาดไฟล์งานของผู้ใช้เด็ดขาด** (เปลี่ยนจากการลดขนาดไฟล์ เป็นการขยายพื้นที่เก็บข้อมูลเพิ่ม)
- ขยายพื้นที่เก็บข้อมูลเพิ่มเติมแบบไร้เพดานใน `.agents/skills/nongton/references/*.md` (7 โมดูลเต็มความจุ รวม `master-brief-v2.0.md` ขนาด `32,003 bytes`) และ `domains/*.md` (6 โดเมนความเชี่ยวชาญ)
- บันทึกผลการตัดสินใจ `TECH DECISION GATE` ทั้ง 5 ข้อลงใน `DECISIONS.md` และ `BACKLOG.md`

## [2026-11-17] อัปเกรดสู่ Personal Assistant AI Agent v2.0
- ติดตั้ง `PERSONAL_ASSISTANT_AGENT_BRIEF.md` (v2.0) เป็นความจริงหลักของโปรเจกต์
- อัปเดตทีมภายในเป็น 8 บทบาท พร้อมระบบตรวจสอบ `Claim Ledger` (`Fact-Checker`, `Numbers Auditor`, `Citation Auditor`, `Red-Team`)
- สร้างโฟลเดอร์ `domains/` พร้อม Domain Pack 6 สาขา (รวมถึงศูนย์กลางเครื่องมือช่วยออกแบบและพัฒนาเกม)
- สร้างไฟล์ `SOURCES.md` และย้ายเอกสารเกมเก่าไปเก็บใน `_archive/`
