# nongton — All-in-One 6-Role Game & Web Development AI Agent Studio (v1.2)

ระบบเอเจนต์ AI คำสั่งเดียวจบ (**`/nongton`**) สำหรับคุณ **nongton** ที่รวมสายงานสตูดิโอ 6 บทบาท (`หัวหน้า > รองหัวหน้า > Design UX/UI > Backend > Frontend > QA`) พร้อมความเชี่ยวชาญคู่ขนานทั้ง **Roblox Studio (Luau + Rojo)**, **Godot Engine (GDScript)** และ **Web Development (Minimal Light)**

---

## 1. วิธีใช้งานในแชท (พิมพ์แค่ `/nongton` คำสั่งเดียวทำได้ทุกอย่าง)

ไม่ต้องจำคำสั่งแยกอีกต่อไป พิมพ์แค่ **`/nongton <สิ่งที่อยากให้ทำ>`** ระบบจะคัดแยกโหมดให้อัตโนมัติ:
- **สร้าง/ออกแบบ/แก้เกม:** `/nongton สร้างระบบสไนเปอร์ซูมสโคปใน Roblox` หรือ `/nongton สร้างบอทศัตรูใน Godot`
- **สร้าง/แก้เว็บไซต์:** `/nongton สร้างหน้าเว็บพอร์ตโฟลิโอโทน Minimal Light`
- **สอนโค้ด / ปลดล็อกเมื่อตัน:** `/nongton อธิบายโค้ดส่วนนี้ให้หน่อย` หรือ `/nongton ตอนนี้คิดไม่ออกว่าจะเพิ่มอะไรต่อดี`
- **เซฟงาน / ส่งขึ้น GitHub หรือ Vercel:** `/nongton เช็กความปลอดภัยแล้วเตรียมเอาขึ้น GitHub ให้หน่อย`
- **เริ่มเซสชัน / อัปเดตกฎ:** `/nongton เริ่มเซสชัน`

---

## 2. วิธีติดตั้งหรืออัปเดตใน Terminal (พิมพ์แค่ `npx nongton` คำสั่งเดียวจบ)

เปิด Terminal ในโฟลเดอร์โปรเจกต์ใดก็ได้ แล้วรันแค่คำสั่งเดียว:

```bash
# ถ้ารันในเครื่องที่เชื่อม npm link ไว้แล้ว (สำรองไฟล์เดิม + ติดตั้ง/อัปเดตกฎและเอกสารเกม + เช็กสถานะให้อัตโนมัติ)
npx nongton

# หรือดึงตรงจาก GitHub ได้ทุกเครื่องด้วยคำสั่งเดียวเช่นกัน
npx github:klakarkhaycturwithy-sketch/build-agent-ai
```

---

## 3. โครงสร้างระบบใน `.agents/`

- **`.agents/rules/`** (โหลดอัตโนมัติทุกเซสชัน และทุกไฟล์มีขนาดต่ำกว่าเพดาน 24KB):
  1. `project-standards.md` — โครงสร้างโฟลเดอร์, เอนจินคู่ขนาน (Roblox+Rojo & Godot), และดีไซน์ Minimal Light
  2. `game-dev-master.md` — Game Dev Master Prompt v1.1 (ข้อ 1–5)
  3. `game-dev-workflow-decisions.md` — Game Dev Master Prompt v1.1 (ข้อ 6–10)
  4. `game-dev-qa-kickoff.md` — Game Dev Master Prompt v1.1 (ข้อ 11–20)
- **`.agents/skills/nongton/`** (ทางเข้าคำสั่งเดียว `/nongton`):
  - `SKILL.md` — สมองคัดแยกงานอัตโนมัติ (Auto-Intent Router)
  - `references/game-studio-v1.2.md` — คู่มือสตูดิโอเกม Roblox Studio (Luau + Rojo) และ Godot (GDScript)
  - `references/web-studio.md` — คู่มือสร้างเว็บ Minimal Light 2 ภาษา (TH/EN)
  - `references/code-coach-unblock.md` — คู่มือสอนโค้ดมือใหม่และปลดล็อกเมื่อตัน
  - `references/deploy-security.md` — คู่มือตรวจความปลอดภัย ลิขสิทธิ์ กฎรายได้ และ GitHub/Vercel
