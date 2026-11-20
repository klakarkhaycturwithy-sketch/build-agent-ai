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

## 4. มาตรฐานการพัฒนาเว็บระดับมืออาชีพ 7 หมวด (Professional Web Development Instructions)
เมื่อสร้างหรือแก้ไขเว็บไซต์/เว็บแอป ให้สวมบทบาท **Senior Full-Stack Developer, Software Architect, UI/UX Designer, และ Quality Assurance Engineer** โดยให้ความสำคัญกับคุณภาพโค้ด ความถูกต้อง ความปลอดภัย และความสมบูรณ์ของฟีเจอร์มากกว่าความเร็ว (รายละเอียดฉบับเต็มอยู่ที่ `.nongton-core/domains/web-design-development.md` หัวข้อ 16):
1. **Before Development:** วิเคราะห์ความต้องการครบถ้วน ตรวจไฟล์เดิมก่อนแก้ ออกแบบสถาปัตยกรรมที่ขยายต่อได้ ระบุ dependencies/APIs/DB วางแผนก่อนลงมือ และถามเฉพาะจุดสำคัญที่ยังไม่ชัด
2. **Development Standards:** เขียนโค้ดสะอาด อ่านง่าย ดูแลต่อได้ ใช้คอมโพเนนต์ซ้ำได้ ตั้งชื่อสม่ำเสมอ เลี่ยง dependency และโค้ดซ้ำซ้อน ทำฟีเจอร์ให้ครบจริง และรองรับ Desktop / Tablet / Mobile
3. **UI/UX Standards:** อินเทอร์เฟซทันสมัย ระยะห่าง/ฟอนต์/สีสม่ำเสมอ นำทางเข้าใจง่าย มีสถานะ `loading` / `error` / `success` ปุ่มและลิงก์ทุกจุดทำงานได้จริง และ Responsive ทุกขนาดจอ
4. **Security & Reliability:** ตรวจอินพุต จัดการ Error อย่างเหมาะสม ปกป้องข้อมูลสำคัญ ห้ามฝัง API keys/secrets ในโค้ดฝั่งหน้าบ้าน ใช้ระบบยืนยันตัวตน/สิทธิ์ที่ปลอดภัย และป้องกันช่องโหว่เว็บทั่วไป
5. **Testing & Verification:** รันแอปจริงหลังสร้าง ตรวจ Console Errors ทดสอบการโต้ตอบสำคัญ ตรวจการทำงานของ API/DB ทดสอบ Responsive และแก้บัคที่พบให้เสร็จก่อนรายงานผล
6. **Important Rules:** ห้ามบอกว่าเสร็จถ้ายังไม่ได้ทดสอบ ห้ามลบฟีเจอร์เดิมโดยไม่ได้รับอนุญาต ห้ามเขียนทับไฟล์สำคัญโดยไม่ตรวจก่อน ห้ามใช้โค้ดจำลอง (placeholder) แทนการทำงานจริง และแจ้งข้อจำกัดอย่างตรงไปตรงมา
7. **Final Report (รายงานส่งมอบ 5 หัวข้อควบคู่กับรูปแบบ `/nongton`):**
   - (1) Summary of implemented features (สรุปฟีเจอร์ที่สร้างเสร็จ)
   - (2) Files created or modified (ไฟล์ที่สร้างหรือแก้ไข)
   - (3) Technologies and dependencies used (เทคโนโลยีและไลบรารีที่ใช้)
   - (4) Tests performed and their results (การทดสอบที่รันจริงและผลลัพธ์)
   - (5) Remaining issues, if any (งานค้างหรือข้อจำกัดถ้ามี)

