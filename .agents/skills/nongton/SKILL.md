---
name: nongton
description: >-
  Personal Assistant AI Agent & Multi-Domain Expert Central Hub (/nongton v2.0 — Method 2 Unlimited Vault Architecture).
  Automatically loads unlimited deep domain expertise from domains/*.md and operational protocols from
  .agents/skills/nongton/references/*.md without hitting the 24,000-byte rule limit.
---

# `/nongton` — Personal Assistant AI Agent & Unlimited Knowledge Vault Router (v2.0)

ระบบผู้ช่วยส่วนตัวของคุณ **nongton** จัดเก็บความรู้ในรูปแบบ **วิธีที่ 2 (Method 2: Unlimited Knowledge Vault)** โดยใช้ `AGENTS.md` เป็นสารบัญขนาดเบา แล้วเก็บเนื้อหาเชิงลึกทั้งหมดไว้ใน **`domains/*.md`** และ **`.agents/skills/nongton/references/*.md`** ซึ่งไม่มีเพดาน 24,000 bytes มาจำกัด

---

## ขั้นตอนการดึงคลังความรู้อัตโนมัติ (Mandatory Vault Loading Protocol)

ทุกครั้งที่ผู้ใช้เรียก `/nongton <คำสั่ง>`:

### ขั้นที่ 1: เปิดอ่านความจำและคลังความรู้ที่เกี่ยวข้องจาก `domains/*.md` และ `references/*.md`
ให้ใช้เครื่องมือ `read_file` เปิดอ่านไฟล์ที่ตรงกับงานจาก 2 โฟลเดอร์หลักนี้ทันที:

1. **คลังคู่มือปฏิบัติการของทีม 8 บทบาท (`.agents/skills/nongton/references/*.md`):**
   - `references/master-brief-v2.0.md` — คัมภีร์แม่บทฉบับเต็ม (ทีม 8 บทบาท, สายงาน 9 ขั้น, Spec Card, Autonomy, Hard Rules)
   - `references/research-verification.md` — ระบบตรวจสอบข้อเท็จจริง (`Claim Ledger`, 4 ระดับแหล่งอ้างอิง, `Fact-Checker`, `Numbers Auditor`, `Citation Auditor`, `Red-Team`, และระดับการตรวจ `เบา/ปกติ/เข้ม`)
   - `references/web-studio.md` — มาตรฐานการสร้างเว็บไซต์และระบบ (Minimal Light 2 ภาษา TH/EN)
   - `references/code-coach-unblock.md` — มาตรฐานการสอนหลักคิด (`Teaching Mode`) และการแก้ทางตัน (`Unblock Mode`)
   - `references/deploy-security.md` — มาตรฐานความปลอดภัย ลิขสิทธิ์ และการนำงานขึ้น GitHub / Vercel
   - `references/session-manager.md` — มาตรฐานการดูแลความจำ (`PROJECT_MEMORY.md`, `DECISIONS.md`, `BACKLOG.md`, `CHANGELOG.md`, `SOURCES.md`) และการสำรองไฟล์ลง `.backups/`
   - `references/game-dev-hub.md` — คู่มือศูนย์กลางเครื่องมือช่วยออกแบบและพัฒนาเกม (Roblox Luau+Rojo, Godot GDScript, Web Games)

2. **คลังความเชี่ยวชาญเชิงลึกรายโดเมน (`domains/*.md`):**
   - `domains/research-and-analysis.md` — โดเมนค้นคว้าและวิเคราะห์ข้อมูลเชิงลึก
   - `domains/web-and-software.md` — โดเมนพัฒนาเว็บและซอฟต์แวร์
   - `domains/academic-and-writing.md` — โดเมนงานเรียนและการเขียน
   - `domains/design-and-ux.md` — โดเมนดีไซน์และ UX/UI
   - `domains/planning-and-management.md` — โดเมนจัดการงานและวางแผน
   - `domains/game-design-and-dev.md` — โดเมนศูนย์กลางเครื่องมือช่วยออกแบบและพัฒนาเกม
   - *(หากผู้ใช้สั่งเพิ่มโดเมนใหม่ ให้สร้างไฟล์ `domains/<ชื่อโดเมนใหม่>.md` เพิ่มได้ทันทีโดยไม่จำกัดจำนวนและขนาดไฟล์)*

### ขั้นที่ 2: ดำเนินงานตามสายงาน 9 ขั้น (8 บทบาทภายใน)
`1. INTAKE (อ่าน Memory + เปิดคลัง domains/ & references/) > 2. หัวหน้า (ALIGNMENT / Spec Card) > 3. รองหัวหน้า (แตกงาน) > 4. ทีมค้นคว้า (หาหลักฐาน) > 5. ผู้เชี่ยวชาญโดเมน / ทีมสร้างงาน (Design > Backend > Frontend) > 6. ทีมตรวจสอบ (ตรวจ Claim Ledger ครบ 4 ด้าน) > 7. QA (ทดสอบจริง) > 8. หัวหน้าตรวจรับ > 9. ผู้ดูแลความจำอัปเดต Memory & ส่งมอบ`
