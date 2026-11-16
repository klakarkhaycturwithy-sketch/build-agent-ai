# nongton — 6-Role Game & Web Development AI Agent System

ชุดติดตั้งกฎและทักษะประจำทีมพัฒนาเกมและเว็บไซต์ 6 บทบาท (`หัวหน้า > รองหัวหน้า > Design UX/UI > Backend > Frontend > QA`) สำหรับคุณ **nongton**

---

## วิธีติดตั้งลงในโปรเจกต์ใหม่ (`npx`)

### 1. ติดตั้งผ่านคำสั่ง `nongton` ในเครื่อง หรือผ่าน GitHub โดยตรง
เปิด Terminal ในโฟลเดอร์โปรเจกต์ใหม่ที่ต้องการใช้งาน แล้วรันคำสั่งใดคำสั่งหนึ่งต่อไปนี้:

```bash
# ถ้ารันในเครื่องที่เชื่อม npm link ไว้แล้ว
npx nongton init

# หรือดึงตรงจาก GitHub ได้ทุกเครื่องทันที
npx github:klakarkhaycturwithy-sketch/build-agent-ai init
```

### 2. คำสั่งทั้งหมดของ CLI

| คำสั่ง | การทำงาน |
|---|---|
| `npx nongton init` | ติดตั้ง `AGENTS.md`, `.agents/` (Rules + 4 Skills), `PROJECT_MEMORY.md`, `.gitignore`, `.vercelignore`, `projects/`, และ `_to_delete/` (ไม่เขียนทับไฟล์ที่มีอยู่แล้ว) |
| `npx nongton status` | ตรวจสอบว่าในโฟลเดอร์ปัจจุบันมีไฟล์กฎและ Skills ของ `nongton` ครบหรือยัง |
| `npx nongton update` | สำรองไฟล์กฎเดิมไว้ที่ `.backups/YYYYMMDD-HHMM/` ก่อน แล้วอัปเดต `AGENTS.md` และ `.agents/` ให้เป็นเวอร์ชันล่าสุด |
| `npx nongton --version` | แสดงหมายเลขเวอร์ชันปัจจุบัน |

---

## ทักษะ (Skills) ที่ติดตั้งมาให้ใน `.agents/skills/`

1. **`nongton`** — ตัวแปรคำสั่งหลัก พิมพ์ `nongton <คำสั่ง>` หรือ `/nongton <คำสั่ง>` เพื่อเปิดใช้งานสายงาน 6 บทบาท
2. **`game-builder`** — ทักษะสร้างเกม 2D บนเว็บ (HTML5 Canvas / Phaser + Vite) และ Godot ที่รองรับการ์ดจอ AMD RX Vega
3. **`deploy-helper`** — ทักษะตรวจความปลอดภัย สแกนหาข้อมูลลับ และเตรียมส่งโค้ดขึ้น GitHub / Vercel
4. **`code-coach`** — ทักษะอธิบายโค้ดภาษาไทยสำหรับมือใหม่ เปรียบเทียบให้เห็นภาพ และช่วยคิดทางออกเมื่อตัน (Unblock Mode)

