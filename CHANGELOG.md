# CHANGELOG (บันทึกการเปลี่ยนแปลงทุกเซสชัน)

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
