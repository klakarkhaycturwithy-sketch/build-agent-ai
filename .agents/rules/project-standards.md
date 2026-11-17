---
trigger: always_on
---

# PROJECT STRUCTURE, DEFAULT TECH STACK & DESIGN SYSTEM (nongton Standards)

# PROJECT STRUCTURE (โครงสร้างโฟลเดอร์)
ทุกโปรเจกต์อยู่ในโฟลเดอร์ย่อยของตัวเองใต้ `projects/` ห้ามวางไฟล์งานปนกันที่ root

```text
<workspace-root>/
├── AGENTS.md                 กฎหลักของทีมและตัวแปรคำสั่ง nongton
├── PROJECT_MEMORY.md         memory กลาง: ความชอบของผู้ใช้ + รายชื่อโปรเจกต์ทั้งหมด
├── .agents/
│   ├── rules/
│   │   ├── project-standards.md           โครงสร้างโฟลเดอร์, เครื่องมือ, และดีไซน์เริ่มต้น (ไฟล์นี้)
│   │   ├── game-dev-master.md             Game Dev Master Prompt v1.1 (ข้อ 1–5: Role, Brief, Copy/Tech Gate)
│   │   ├── game-dev-workflow-decisions.md Game Dev Master Prompt v1.1 (ข้อ 6–10: Rules, Spec Card, Open Decisions)
│   │   └── game-dev-qa-kickoff.md         Game Dev Master Prompt v1.1 (ข้อ 11–20: Design, MVP 7 วัน, QA, Kickoff)
│   └── skills/
│       └── nongton/
│           ├── SKILL.md                   คำสั่งเดียวรวมทุกความสามารถ (/nongton All-in-One Router v1.2)
│           └── references/                คลังความเชี่ยวชาญย่อยที่ /nongton ดึงใช้อัตโนมัติ
│               ├── game-studio-v1.2.md    สตูดิโอสร้างเกม (Roblox Luau + Rojo และ Godot GDScript)
│               ├── web-studio.md          สตูดิโอสร้างเว็บ (Minimal Light 2 ภาษา TH/EN)
│               ├── code-coach-unblock.md  โหมดสอนโค้ดมือใหม่และปลดล็อกเมื่อตัน (Teaching & Unblock)
│               └── deploy-security.md     ตรวจความปลอดภัย ลิขสิทธิ์ กฎรายได้ และส่งขึ้น GitHub/Vercel
├── projects/
│   └── <project-name>/       หนึ่งโฟลเดอร์ต่อหนึ่งโปรเจกต์ (ภาษาอังกฤษตัวเล็กคั่นด้วยขีด)
│       ├── PROJECT_MEMORY.md memory เฉพาะโปรเจกต์: สถาปัตยกรรม, ข้อมูล, บัค
│       ├── README.md         วิธีเปิด/รันโปรเจกต์แบบสั้นๆ
│       └── ...               ไฟล์งาน
├── .backups/                 สำรองไฟล์ก่อนแก้ (YYYYMMDD-HHMM/)
└── _to_delete/               ไฟล์ที่เลิกใช้ (แทนการลบ)
```

- ชื่อโฟลเดอร์โปรเจกต์: ภาษาอังกฤษตัวเล็ก คั่นด้วยขีด เช่น `snake-game`, `portfolio-site` (ไม่ใช้ภาษาไทยหรือช่องว่าง เพราะเครื่องมือบางตัวอ่านพาธแบบนี้ผิด)
- เริ่มโปรเจกต์ใหม่: สร้างโฟลเดอร์ + `PROJECT_MEMORY.md` + `README.md` แล้วเพิ่มชื่อโปรเจกต์ลงรายชื่อใน memory กลาง
- กฎหัวข้อ MEMORY ใช้กับทั้งสองไฟล์: เรื่องของผู้ใช้เก็บใน memory กลาง เรื่องของโปรเจกต์เก็บใน memory ของโปรเจกต์นั้น

# DEFAULT TECH STACK (เครื่องมือเริ่มต้น)
ถ้าผู้ใช้ไม่ได้ระบุเครื่องมือ ให้หัวหน้าเสนอตามตารางนี้ในขั้น ALIGNMENT และรอผู้ใช้ยืนยันก่อน ห้ามเลือกเครื่องมือนอกตารางเองโดยไม่ถาม

| ประเภทงาน | ค่าเริ่มต้น | ใช้เมื่อ |
|---|---|---|
| เว็บเล็ก (1–3 หน้า, landing, portfolio) | HTML + CSS + JavaScript ล้วน ไม่ต้อง build | งานส่วนใหญ่ เปิดไฟล์ในเบราว์เซอร์ได้ทันที |
| เว็บที่มีหลายหน้า/ข้อมูลเยอะ | Vite + JavaScript (เพิ่ม React เฉพาะเมื่อจำเป็นจริง) | เมื่อ HTML ล้วนเริ่มจัดการยาก |
| เกม 2D เล่นบนเบราว์เซอร์ | HTML5 Canvas หรือ Phaser + Vite | เกมที่อยากเปิดเล่นทันทีหรือแชร์ผ่าน Vercel/Netlify |
| เกมออนไลน์ 3D / สนามประลอง / ปล่อยสาธารณะง่าย | Roblox Studio (ภาษา Luau) + เชื่อมโค้ดผ่าน Rojo | เมื่ออยากได้เซิร์ฟเวอร์ออนไลน์ในตัว เล่นได้ทุกอุปกรณ์ และต่อยอดหารายได้บน Roblox |
| เกมที่อยากทำเป็นโปรแกรมติดตั้ง (`.exe`) / RPG / 3D-2D อิสระ | Godot Engine (ภาษา GDScript ใกล้เคียง Python) | เมื่ออยากเป็นเจ้าของไฟล์เกม 100% ปล่อยบน Steam/itch.io หรือเล่นออฟไลน์สู้บอท |

- ทุกเครื่องมือต้องรันบน Windows + AMD GPU ได้ ห้ามพึ่ง CUDA/NVIDIA
- ก่อนติดตั้ง ให้ตรวจเวอร์ชันเสถียรล่าสุดจากเอกสารทางการ ห้ามเดาเวอร์ชัน
- เลือกตัวที่ง่ายที่สุดที่ทำงานได้ก่อน ค่อยขยับไปตัวที่ซับซ้อนขึ้นเมื่อมีเหตุผลชัดเจน และอธิบายเหตุผลให้ผู้ใช้ฟัง

# DEFAULT DESIGN SYSTEM (สไตล์ดีไซน์เริ่มต้น)
เมื่อสร้างหน้าเว็บและผู้ใช้ไม่ได้ระบุโทนสีอื่น ให้ใช้โทน **Minimal Light** ที่ผู้ใช้ชอบเป็นค่าเริ่มต้น:
- สีพื้นหลังหลัก (`--bg-page`): `#FAF8F5` (ครีมอุ่น สบายตา)
- สีพื้นหลังการ์ด (`--bg-surface`): `#FFFFFF` | สีเน้น (`--accent`): `#0F766E` (เขียวอมฟ้าเข้ม)
- ฟอนต์: `"Inter", "Noto Sans Thai", sans-serif`
- รองรับปุ่มสลับ 2 ภาษา (`TH` / `EN`) ด้วย `data-i18n` สำหรับเว็บแนะนำตัวหรือพอร์ตโฟลิโอ
