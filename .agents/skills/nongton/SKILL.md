---
name: nongton
description: >-
  Personal Assistant AI Agent & Multi-Domain Expert Central Hub (/nongton v2.0 — Expanded Unlimited Storage Vault).
  Preserves 100% of all user work files without ever reducing file sizes, while expanding total storage space
  without limits across .nongton-core/domains/*.md, .nongton-core/context/*.md, and .agents/skills/nongton/references/*.md.
---

# `/nongton` — Personal Assistant AI Agent & Expanded Unlimited Storage Vault (v2.0)

ระบบผู้ช่วยส่วนตัวของคุณ **nongton** ใช้สถาปัตยกรรม **ขยายพื้นที่เก็บข้อมูลเพิ่มเติมแบบไม่จำกัด (Method 2: Expanded Unlimited Knowledge Vault)** โดย **คงเนื้อหาใน `AGENTS.md` และไฟล์งานทุกไฟล์ไว้เต็ม 100% (ห้ามย่อหรือลดขนาดไฟล์งานเด็ดขาด)** พร้อมกับ **เพิ่มพื้นที่เก็บข้อมูลไร้เพดาน** ในโฟลเดอร์ **`.nongton-core/domains/*.md`**, **`.nongton-core/context/*.md`**, และ **`.agents/skills/nongton/references/*.md`** (และเก็บไฟล์สำรองไว้ใน `.storage/.backups/`, `.storage/_archive/`, `.storage/_to_delete/`)

---

## ขั้นตอนการดึงคลังความรู้อัตโนมัติ (Mandatory Vault Loading Protocol)

ทุกครั้งที่ผู้ใช้เรียก `/nongton <คำสั่ง>`:

### ขั้นที่ 1: เปิดอ่านความจำจาก `.nongton-core/context/*.md` และคลังความรู้ที่ขยายเพิ่มเติมจาก `.nongton-core/domains/*.md` และ `references/*.md`
ให้ใช้เครื่องมือ `read_file` เปิดอ่านไฟล์ความจำใน `.nongton-core/context/` และไฟล์ที่ตรงกับงานจากคลังพื้นที่ขยายเพิ่มเติมทั้ง 2 โฟลเดอร์นี้ทันที:

1. **คลังคู่มือปฏิบัติการของทีม 8 บทบาท (`.agents/skills/nongton/references/*.md` — พื้นที่เก็บข้อมูลไร้เพดาน):**
   - `references/master-brief-v2.0.md` — คัมภีร์แม่บทฉบับเต็ม (`32,003 bytes` ขยายเพิ่มได้ไม่จำกัด)
   - `references/research-verification.md` — ระบบตรวจสอบข้อเท็จจริง (`Claim Ledger`, 4 ระดับแหล่งอ้างอิง, `Fact-Checker`, `Numbers Auditor`, `Citation Auditor`, `Red-Team`, และระดับการตรวจ `เบา/ปกติ/เข้ม`)
   - `references/web-studio.md` — มาตรฐานการสร้างเว็บไซต์และระบบ (Blue & White โทนขาว-น้ำเงิน 2 ภาษา TH/EN)
   - `references/code-coach-unblock.md` — มาตรฐานการสอนหลักคิด (`Teaching Mode`) และการแก้ทางตัน (`Unblock Mode`)
   - `references/deploy-security.md` — มาตรฐานความปลอดภัย ลิขสิทธิ์ และการนำงานขึ้น GitHub / Vercel
   - `references/session-manager.md` — มาตรฐานการดูแลความจำใน `.nongton-core/context/` (`PROJECT_MEMORY.md`, `DECISIONS.md`, `BACKLOG.md`, `CHANGELOG.md`, `SOURCES.md`) และการสำรองไฟล์ลง `.storage/.backups/`
   - `references/game-dev-hub.md` — คู่มือศูนย์กลางเครื่องมือช่วยออกแบบและพัฒนาเกม (Roblox Luau+Rojo, Godot GDScript, Web Games)

2. **คลังความเชี่ยวชาญเชิงลึกรายโดเมน (`.nongton-core/domains/*.md` — พื้นที่เก็บข้อมูลไร้เพดาน):**
   - `.nongton-core/domains/web-design-development.md` — **Web Design & Development Specialist Pack (v1.0 — คู่มือหลักระดับ Senior Lead สำหรับออกแบบและพัฒนาเว็บไซต์/เว็บแอปขนาดใหญ่ 8 เฟส, Design Tokens, Quality Gates CWV/WCAG 2.2, Page Spec, Copy Gate, PR Checklist)** *(ต้องอ่านทุกครั้งเมื่อมีงานออกแบบหรือพัฒนาเว็บไซต์)*
   - `.nongton-core/domains/research-and-analysis.md` — โดเมนค้นคว้าและวิเคราะห์ข้อมูลเชิงลึก
   - `.nongton-core/domains/web-and-software.md` — โดเมนพัฒนาเว็บและซอฟต์แวร์ทั่วไป (เชื่อมโยงกับ `web-design-development.md`)
   - `.nongton-core/domains/academic-and-writing.md` — โดเมนงานเรียนและการเขียน
   - `.nongton-core/domains/design-and-ux.md` — โดเมนดีไซน์และ UX/UI (เชื่อมโยงกับ `web-design-development.md`)
   - `.nongton-core/domains/planning-and-management.md` — โดเมนจัดการงานและวางแผน
   - `.nongton-core/domains/game-design-and-dev.md` — โดเมนศูนย์กลางเครื่องมือช่วยออกแบบและพัฒนาเกม
   - *(กฎสำคัญ: ห้ามย่อหรือลดขนาดไฟล์เดิมของผู้ใช้ เมื่อข้อมูลมากขึ้นให้ขยายพื้นที่โดยเพิ่มเนื้อหาหรือเพิ่มไฟล์ใน `.nongton-core/domains/*.md` และ `references/*.md` ได้ไม่จำกัด)*

### ขั้นที่ 2: ดำเนินงานตามสายงาน 9 ขั้น (8 บทบาทภายใน)
`1. INTAKE (อ่าน Memory + เปิดคลัง domains/ & references/) > 2. หัวหน้า (ALIGNMENT / Spec Card) > 3. รองหัวหน้า (แตกงาน) > 4. ทีมค้นคว้า (หาหลักฐาน) > 5. ผู้เชี่ยวชาญโดเมน / ทีมสร้างงาน (Design > Backend > Frontend) > 6. ทีมตรวจสอบ (ตรวจ Claim Ledger ครบ 4 ด้าน) > 7. QA (ทดสอบจริง) > 8. หัวหน้าตรวจรับ > 9. ผู้ดูแลความจำอัปเดต Memory & ส่งมอบ`
