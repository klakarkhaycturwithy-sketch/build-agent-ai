# nongton — Personal Assistant AI Agent & Multi-Domain Expert Hub (v2.1.0)

**`nongton`** คือ **AI Agent ผู้ช่วยส่วนตัวระดับผู้เชี่ยวชาญหลายสาขา (Personal Assistant AI Agent)** สำหรับคุณ **nongton** ที่มี **ทีมค้นคว้าวิจัยและตรวจสอบความถูกต้องของข้อมูล (8-Role Research & Verification Team)** อยู่ในตัว เพื่อให้งานและโปรเจกต์ทุกชิ้นได้คุณภาพสูงสุด
- แม้ตัวเอเจนต์จะไม่ใช่เอนจินสร้างเกมเฉพาะทาง (not a dedicated game-creation engine) แต่ทำหน้าที่เป็น **ศูนย์กลางรวมเครื่องมือ (Central Hub)** ที่ช่วยได้ครบทุกสาขา ทั้งงานค้นคว้าวิเคราะห์, พัฒนาเว็บและซอฟต์แวร์, งานเรียนและการเขียน, ดีไซน์ UX/UI, การวางแผนจัดการงาน, **รวมถึงช่วยออกแบบและพัฒนาเกมของคุณ `nongton`**

---

## 1. วิธีใช้งานในแชท (พิมพ์แค่ `/nongton` คำสั่งเดียวครอบคลุมทุกโดเมน)

- **ค้นคว้าและตรวจสอบข้อมูล (Claim Ledger):** `/nongton ค้นคว้าและเปรียบเทียบเรื่อง ... พร้อมตรวจแหล่งอ้างอิง`
- **พัฒนาเว็บและซอฟต์แวร์:** `/nongton สร้างหน้าเว็บพอร์ตโฟลิโอโทน Minimal Light`
- **งานเรียนและการเขียน:** `/nongton ช่วยวางโครงรายงานและอธิบายเรื่อง ... ให้เข้าใจง่ายๆ`
- **ศูนย์กลางเครื่องมือออกแบบและพัฒนาเกม:** `/nongton ช่วยออกแบบระบบเกมและเขียนโค้ด ...`
- **สอนหลักคิดและปลดล็อกเมื่อตัน:** `/nongton ตอนนี้ติดปัญหาเรื่อง ... มีทางเลือกไหนบ้าง`
- **เริ่มเซสชัน / จัดการความจำ:** `/nongton เริ่มเซสชัน`

---

## 2. วิธีติดตั้งหรืออัปเดตใน Terminal (`npx nongton` คำสั่งเดียวจบ)

```bash
# สำรองไฟล์เดิม + ติดตั้ง/อัปเดตกฎ, Domain Packs, โครงสร้าง Memory v2.0 + เช็กสถานะ READY อัตโนมัติ
npx nongton

# หรือดึงตรงจาก GitHub Repository (https://github.com/klakarkhaycturwithy-sketch/nongton) ได้ทุกเครื่องด้วยคำสั่งเดียว
npx github:klakarkhaycturwithy-sketch/nongton
```

---

## 3. โครงสร้างระบบตาม `.nongton-core/context/PERSONAL_ASSISTANT_AGENT_BRIEF.md` (v2.0)

- **`AGENTS.md`** — ทางเข้ากฎหลักของทีมภายใน 8 บทบาทที่หน้า Root (ชี้ไปยัง `.nongton-core/context/` และ `.nongton-core/domains/`)
- **`.nongton-core/context/`** — ศูนย์รวมไฟล์ความจำและสถานะของโปรเจกต์ (`PERSONAL_ASSISTANT_AGENT_BRIEF.md`, `PROJECT_MEMORY.md`, `DECISIONS.md`, `BACKLOG.md`, `CHANGELOG.md`, `SOURCES.md`)
- **`.nongton-core/domains/`** — คลังความเชี่ยวชาญเชิงลึกรายโดเมน (Domain Packs 6 สาขาเริ่มต้น + เพิ่มได้ตลอด)
- **`.nongton-core/bin/cli.js` & `.nongton-core/skills-lock.json`** — เอนจิน CLI ของ `npx nongton` และรายการล็อกเวอร์ชันสกิลเสริม
- **`.storage/`** — ศูนย์รวมโฟลเดอร์สำรองและเก็บถาวร (`.storage/_archive/`, `.storage/_to_delete/`, `.storage/.backups/`) ซ่อนจากแถบด้านซ้ายของ IDE ด้วย `.vscode/settings.json`
- **`.agents/skills/nongton/`** — ทางเข้าคำสั่งเดียว (`/nongton`) และคู่มือปฏิบัติการย่อยใน `references/`
- **`.agents/skills/`** — คลังสกิลเสริมระดับโปรเจกต์ที่ติดตั้งพร้อมใช้งาน (`using-agent-skills`, `vercel-react-best-practices`, `web-design-engineer`, `supabase`, `agent-browser`, `executing-plans`, `grill-me`, `web-search`)
