---
trigger: always_on
---

# PROJECT STRUCTURE, DOMAIN PACKS & DEFAULT STANDARDS (nongton Personal Assistant v2.0)

# 1. PROJECT STRUCTURE (โครงสร้างโฟลเดอร์ตาม Brief v2.0 ข้อ 9)
```text
<workspace-root>/
├── PERSONAL_ASSISTANT_AGENT_BRIEF.md  ความจริงหลักของโปรเจกต์ (Personal Assistant v2.0)
├── AGENTS.md                          กฎหลักของทีมภายใน 8 บทบาท และคำสั่ง /nongton
├── CLAUDE.md                          ทางเข้ากฎสำหรับ Claude Code / Claude Desktop
├── PROJECT_MEMORY.md                  สถาปัตยกรรม การตัดสินใจ ความชอบผู้ใช้ บทเรียน
├── DECISIONS.md                       วันที่ | เรื่อง | ตัวเลือก | ที่เลือก | เหตุผล
├── BACKLOG.md                         ไอเดีย/งานค้าง: เสนอ | อนุมัติ | ปฏิเสธ | เสร็จ
├── CHANGELOG.md                       บันทึกการเปลี่ยนแปลงทุกเซสชัน
├── SOURCES.md                         แหล่งข้อมูลที่ใช้บ่อย + ระดับความน่าเชื่อถือ + วันที่ตรวจล่าสุด
├── domains/                           Domain Pack ความเชี่ยวชาญเชิงลึกแต่ละสาขา (ข้อ 3.1)
│   ├── research-and-analysis.md       โดเมนค้นคว้าและวิเคราะห์ข้อมูล
│   ├── web-and-software.md            โดเมนพัฒนาเว็บและซอฟต์แวร์
│   ├── academic-and-writing.md        โดเมนงานเรียนและการเขียน
│   ├── design-and-ux.md               โดเมนดีไซน์และ UX/UI
│   ├── planning-and-management.md     โดเมนจัดการงานและวางแผน
│   └── game-design-and-dev.md         ศูนย์กลางรวมเครื่องมือช่วยออกแบบและพัฒนาเกม
├── .agents/
│   ├── rules/
│   │   └── project-standards.md       โครงสร้างโปรเจกต์และมาตรฐานเริ่มต้น (ไฟล์นี้)
│   └── skills/
│       ├── nongton/                   คำสั่งเดียวรวมศูนย์ (/nongton Personal Assistant Hub v2.0 — Method 2 Vault)
│       │   ├── SKILL.md               ตัวดึงคลังความรู้ไร้เพดานอัตโนมัติ (Unlimited Vault Router)
│       │   └── references/            คลังคู่มือไร้เพดาน 7 โมดูล (master-brief-v2.0, research, web, coach, deploy, session, game-hub)
│       ├── game-builder/REFERENCE.md  เชื่อมต่อไปยังศูนย์กลางเครื่องมือเกมของ /nongton
│       ├── deploy-helper/REFERENCE.md เชื่อมต่อไปยังโมดูลความปลอดภัยและการส่งมอบงานของ /nongton
│       └── code-coach/REFERENCE.md    เชื่อมต่อไปยังโมดูลสอนหลักคิดและปลดล็อกของ /nongton
├── projects/                          โฟลเดอร์แยกเก็บโปรเจกต์ย่อย (projects/<project-name>/)
├── _archive/                          เอกสารเก่าที่เลิกใช้ (ไม่ลบ)
├── .backups/                          สำรองไฟล์ก่อนแก้ (YYYYMMDD-HHMM/)
└── _to_delete/                        ไฟล์ที่ย้ายออกแทนการลบ
```

# 2. DEFAULT DESIGN SYSTEM (สไตล์ดีไซน์เริ่มต้น: เรียบง่ายแต่มีคุณภาพ)
เมื่อสร้างหน้าเว็บ เอกสาร หรือ UI และผู้ใช้ไม่ได้ระบุโทนสีอื่น ให้ใช้โทน **Minimal Light** ที่คุณ `nongton` ชอบเป็นค่าเริ่มต้น:
- สีพื้นหลังหลัก (`--bg-page`): `#FAF8F5` (ครีมอุ่น สบายตา)
- สีพื้นหลังการ์ด (`--bg-surface`): `#FFFFFF` | สีเน้น (`--accent`): `#0F766E` (เขียวอมฟ้าเข้ม)
- ฟอนต์: `"Inter", "Noto Sans Thai", sans-serif`
- รองรับปุ่มสลับ 2 ภาษา (`TH` / `EN`) ด้วย `data-i18n` สำหรับเว็บแนะนำตัวหรือพอร์ตโฟลิโอ
