# Web Development Studio Reference (Minimal Light & Clean Code)

คู่มือความเชี่ยวชาญด้านการสร้างและแก้ไขเว็บไซต์ที่ถูกเรียกใช้อัตโนมัติผ่านคำสั่ง `/nongton`

## 1. เครื่องมือเริ่มต้น (Default Web Tech Stack)
- **เว็บ 1–3 หน้า (Landing Page, Portfolio, Dashboard ขนาดเล็ก):** ใช้ `HTML5 + CSS3 + Vanilla JavaScript` ล้วน (เปิดไฟล์รันได้ทันที ไม่ต้องผ่านขั้นตอน Build ซับซ้อน)
- **เว็บหลายหน้าหรือระบบข้อมูลซับซ้อน:** ใช้ `Vite + JavaScript` (เพิ่ม React เฉพาะเมื่อจำเป็นและคุณ `nongton` ยืนยันใน Spec Card แล้ว)

## 2. สไตล์ดีไซน์เริ่มต้น (Minimal Light Design System)
หากคุณ `nongton` ไม่ได้ระบุโทนสีอื่น ให้ใช้โทน **Minimal Light** เสมอ:
- พื้นหลังหน้าเว็บ (`--bg-page`): `#FAF8F5` (สีครีมอุ่น สบายตา)
- พื้นหลังการ์ด (`--bg-surface`): `#FFFFFF` | เส้นขอบ (`--border-subtle`): `#E5E0D8`
- สีข้อความหลัก (`--text-main`): `#18181B` | สีข้อความรอง (`--text-muted`): `#52525B`
- สีเน้นปุ่มและจุดสำคัญ (`--accent`): `#0F766E` (เขียวอมฟ้าเข้ม) | เมื่อชี้เมาส์ (`--accent-hover`): `#115E59`
- ฟอนต์: `"Inter", "Noto Sans Thai", system-ui, sans-serif`
- รองรับปุ่มสลับ 2 ภาษา (`TH` / `EN`) ด้วยแอตทริบิวต์ `data-i18n` สำหรับเว็บแนะนำตัวหรือพอร์ตโฟลิโอ

## 3. การเชื่อมโยงสู่มาตรฐานระดับสูง (Large-Scale Web Specialist Pack)
- สำหรับการออกแบบและพัฒนาเว็บไซต์หรือเว็บแอปขนาดใหญ่ (หลายหน้า, อีคอมเมิร์ซ, แดชบอร์ด, Design System, ระบบสองภาษาเต็มรูปแบบ) ให้เปิดอ่านและยึดคู่มือเฉพาะทางฉบับเต็มใน `.nongton-core/domains/web-design-development.md`
- คู่มือดังกล่าวครอบคลุม: 8 เฟสพร้อมด่านอนุมัติ (`Discovery` -> `Maintain`), การสร้างแบบ `Vertical Slices`, ระบบ `Design Tokens` (ใช้ Minimal Light เป็นค่าเริ่มต้นหรือปรับตามโจทย์ของแต่ละงานได้อิสระ), `Tech Decision Gate`, เกณฑ์คุณภาพ `Core Web Vitals` + `WCAG 2.2 Level AA`, `PAGE SPEC`, ป้ายทดสอบ (`[tested]` / `[code-reviewed]` / `[not tested]`), `COPY CARD` / `ASSETS.md`, และ `PR Checklist`

