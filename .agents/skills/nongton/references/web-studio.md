# Web Development Studio Reference (Blue & White & Clean Code)

คู่มือความเชี่ยวชาญด้านการสร้างและแก้ไขเว็บไซต์ที่ถูกเรียกใช้อัตโนมัติผ่านคำสั่ง `/nongton`

## 1. เครื่องมือเริ่มต้น (Default Web Tech Stack)
- **เว็บ 1–3 หน้า (Landing Page, Portfolio, Dashboard ขนาดเล็ก):** ใช้ `HTML5 + CSS3 + Vanilla JavaScript` ล้วน (เปิดไฟล์รันได้ทันที ไม่ต้องผ่านขั้นตอน Build ซับซ้อน)
- **เว็บหลายหน้าหรือระบบข้อมูลซับซ้อน:** ใช้ `Vite + JavaScript` (เพิ่ม React เฉพาะเมื่อจำเป็นและคุณ `nongton` ยืนยันใน Spec Card แล้ว)

## 2. สไตล์ดีไซน์เริ่มต้น (Blue & White Design System)
หากคุณ `nongton` ไม่ได้ระบุโทนสีอื่น สำหรับเว็บไซต์และเว็บแอปทุกประเภทที่สั่งสร้าง (โดยไม่จำกัดเฉพาะรูปแบบใดรูปแบบหนึ่ง) ให้ใช้โทน **Blue & White (ขาว-น้ำเงิน)** เป็นค่าเริ่มต้นเสมอ (หรือปรับตามโจทย์ของแต่ละงาน):
- พื้นหลังหน้าเว็บ (`--bg-page` / `--color-bg`): `#FFFFFF` (สีขาวสะอาดตา)
- พื้นหลังการ์ด (`--bg-surface` / `--color-surface`): `#F4F8FD` (ขาวอมฟ้าอ่อนสบายตา) | เส้นขอบตกแต่ง (`--border-subtle`): `#DBEAFE` | ขอบช่องกรอก (`--color-border-control`): `#475569`
- สีข้อความหลัก (`--text-main` / `--color-text`): `#0F172A` | สีข้อความรอง (`--text-muted` / `--color-text-muted`): `#475569`
- สีเน้นปุ่มและจุดสำคัญ (`--accent` / `--color-primary`): `#1D4ED8` (น้ำเงินเข้มคมชัด ผ่าน WCAG 2.2 AA `6.70:1`) | เมื่อชี้เมาส์ (`--accent-hover` / `--color-primary-hover`): `#1E40AF`
- ฟอนต์: `"Inter", "Noto Sans Thai", system-ui, sans-serif` (กำหนด `line-height: 1.7` สำหรับข้อความภาษาไทย)
- รองรับปุ่มสลับ 2 ภาษา (`TH` / `EN`) ด้วยแอตทริบิวต์ `data-i18n` หรือไฟล์ `src/i18n/` สำหรับเว็บไซต์และเว็บแอปทุกประเภทเมื่อผู้ใช้ต้องการสองภาษา

## 3. การเชื่อมโยงสู่มาตรฐานระดับสูง (Large-Scale Web Specialist Pack)
- สำหรับการออกแบบและพัฒนาเว็บไซต์หรือเว็บแอปขนาดใหญ่ (หลายหน้า, อีคอมเมิร์ซ, แดชบอร์ด, Design System, ระบบสองภาษาเต็มรูปแบบ) ให้เปิดอ่านและยึดคู่มือเฉพาะทางฉบับเต็มใน `.nongton-core/domains/web-design-development.md`
- คู่มือดังกล่าวครอบคลุม: 8 เฟสพร้อมด่านอนุมัติ (`Discovery` -> `Maintain`), การสร้างแบบ `Vertical Slices`, ระบบ `Design Tokens` (ใช้ Blue & White โทนขาว-น้ำเงินเป็นค่าเริ่มต้นหรือปรับตามโจทย์ของแต่ละงานได้อิสระ), `Tech Decision Gate`, เกณฑ์คุณภาพ `Core Web Vitals` + `WCAG 2.2 Level AA`, `PAGE SPEC`, ป้ายทดสอบ (`[tested]` / `[code-reviewed]` / `[not tested]`), `COPY CARD` / `ASSETS.md`, และ `PR Checklist`

