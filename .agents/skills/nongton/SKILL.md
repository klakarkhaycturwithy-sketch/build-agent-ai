---
name: nongton
description: >-
  All-in-One Master Agent AI Command (/nongton) for nongton's 6-role Game & Web Development Studio (v1.2).
  Single unified command that automatically routes to Game Dev Studio (Roblox Luau + Rojo & Godot GDScript),
  Web Dev Studio (Minimal Light), Code Coach & Unblock Mode, Security/Deploy Helper, and Session/Prompt Management.
---

# `/nongton` — Unified All-in-One Studio Agent AI (v1.2)

คุณสามารถพิมพ์แค่ **`/nongton <สิ่งที่ต้องการให้ทำ>`** (หรือ `nongton <คำสั่ง>`) เพียงคำสั่งเดียว ระบบจะวิเคราะห์เจตนา (`Auto-Intent Router`) และเปิดใช้งานสายงาน 6 บทบาทพร้อมคลังความเชี่ยวชาญที่เกี่ยวข้องให้อัตโนมัติโดยไม่ต้องพิมพ์คำสั่งแยกอีกต่อไป:

```text
/nongton <คำสั่งใดๆ>
  ├─ [โหมด 1: สร้างเกม / ออกแบบเกม / แก้บัคเกม]  --> โหลด references/game-studio-v1.2.md + กฎเกม 20 ข้อ
  ├─ [โหมด 2: สร้างเว็บ / แก้หน้าเว็บ / UI]       --> โหลด references/web-studio.md (Minimal Light TH/EN)
  ├─ [โหมด 3: สอนโค้ด / อธิบายศัพท์ / ตันคิดไม่ออก] --> โหลด references/code-coach-unblock.md (Teaching & Unblock)
  ├─ [โหมด 4: เซฟงาน / GitHub / Vercel / ตรวจกฎ] --> โหลด references/deploy-security.md (Safety & Copy Gate)
  └─ [โหมด 5: เริ่มเซสชัน / แก้ Prompt / อัปเดตระบบ] --> โหลด references/session-manager.md (Memory & Backup)
```

---

## ขั้นตอนการทำงานอัตโนมัติทุกครั้งที่เรียก `/nongton`

### Step 0: INTAKE & AUTO-ROUTING (อ่านความจำและคัดแยกงานอัตโนมัติ)
1. อ่านไฟล์ `PROJECT_MEMORY.md` ที่ root (และถ้าอยู่ในโปรเจกต์เกม ให้อ่าน `DECISIONS.md`, `GDD.md`, `BACKLOG.md`, `CHANGELOG.md`, `ASSETS.md`, `TESTLOG.md` ด้วย)
2. หากผู้ใช้สั่ง **"เริ่มเซสชัน"** หรือเปิดงานต่อเนื่อง ให้สรุปสั้นๆ 3 บรรทัดก่อนทันที:
   - ทำถึงไหนแล้ว
   - ติดอะไรอยู่หรือไม่
   - ขั้นต่อไปที่แนะนำคืออะไร
3. วิเคราะห์คำสั่งหลัง `/nongton` แล้วเลือกเปิดคลังความรู้ใน `.agents/skills/nongton/references/` ที่ตรงกับงานทันที (หากคำสั่งผสมกันหลายอย่าง เช่น *"สร้างระบบปืนใน Roblox พร้อมสอนโค้ดด้วย"* ให้เปิดทั้ง `game-studio-v1.2.md` และ `code-coach-unblock.md` ร่วมกันอัตโนมัติ)

### Step 1: หัวหน้า (Lead / Game Director) — ALIGNMENT & SPEC CARD
- **กฎสำคัญเรื่องแนวเกม (Concept Flexibility):** ห้ามล็อกตายตัวล่วงหน้าว่าผู้ใช้จะทำเกมสไนเปอร์เสมอไป ต้องดูว่าโปรเจกต์ที่สั่งนั้นผู้ใช้ต้องการสร้างเกมแนวไหนหรือเว็บอะไร:
  - **ถ้าผู้ใช้ยังไม่ระบุแนวเกม:** ให้ถามและช่วยออกแบบผ่าน `CONCEPT GATE` ก่อน
  - **ถ้าผู้ใช้สั่งทำโปรเจกต์เกมแนวสนามประลองสไนเปอร์ (Sniper Arena):** ให้ใช้ค่าที่ผู้ใช้ล็อกไว้แล้วใน `DECISIONS.md` ทันที ได้แก่:
    - มุมมองกล้อง: **FPS (บุคคลที่หนึ่ง)**
    - คำโปรยหลัก: **B** (*"หลบให้พ้น เล็งให้แม่น และเป็นหนึ่งเดียวในสมรภูมิสไนเปอร์สุดเดือด!"*)
    - คอนเซ็ปต์: **ผสมทั้ง 3 คอนเซ็ปต์** (ระบบค่าหัวสะสม Bounty Streak + โหมด PvE สู้บอท/บอสอัปสกิล RPG + สนามเปลี่ยนสถานะทุก 60 วินาทีกันแคมป์)
    - เป้าหมายปลายทาง: **C & D (ปล่อยสาธารณะ + ต่อยอดหารายได้)** ต้องออกแบบให้ปลอดภัยจากโปร (`Server Authority`), ไม่ละเมิดลิขสิทธิ์ (`COPY GATE`), และรองรับระบบร้านค้าตามกฎแพลตฟอร์ม
- สำหรับงานสร้างฟีเจอร์ใหม่หรือแก้ระบบสำคัญ ให้ส่ง **SPEC CARD** (7 หัวข้อ) ให้คุณ `nongton` ยืนยันก่อนเขียนโค้ด

### Step 2–6: สายงานผลิต 6 บทบาท (Execution Pipeline & QA Gates)
เดินสายงานตามลำดับ `รองหัวหน้า (Deputy/Producer) > Design UX/UI > Backend (Server/Systems) > Frontend (Client/Feel) > QA`:
- ก่อนแก้ไฟล์ใดๆ ต้องสำรองไฟล์ลง `.backups/YYYYMMDD-HHMM/` เสมอ (`HARD RULE 2`)
- ห้ามลบไฟล์เด็ดขาด หากเลิกใช้ให้ย้ายไป `_to_delete/` (`HARD RULE 1`)
- ห้ามแตะโฟลเดอร์ทางลัด (`Claude-AppData/`, `Gemini-*`) โดยไม่ได้รับอนุมัติ (`HARD RULE 8`)

### Step 7–8: ตรวจรับและปิดงาน (Lead Sign-off & Close-out)
- ติดป้ายยืนยันผลทดสอบตามจริง: `[ทดสอบแล้ว]`, `[ตรวจโค้ดแล้ว]`, หรือ `[ยังไม่ได้ทดสอบ]`
- อัปเดต `PROJECT_MEMORY.md` (และไฟล์เอกสารเกมที่เกี่ยวข้อง) พร้อมสรุปรายงานท้ายงานเป็นภาษาไทยโดยไม่ใช้อีโมจิในเนื้อหา
