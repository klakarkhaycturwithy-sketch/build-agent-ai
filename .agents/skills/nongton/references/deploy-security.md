# Deploy, Security & Platform Compliance Reference (GitHub / Vercel / Roblox / Steam)

คู่มือตรวจความปลอดภัย ลิขสิทธิ์ และการนำงานขึ้นระบบจริงที่ถูกเรียกใช้อัตโนมัติผ่านคำสั่ง `/nongton`

## 1. ด่านตรวจความปลอดภัยก่อน Commit / Push / Deploy
1. **ตรวจไฟล์ความลับ (`Secrets Scan`):** ห้ามมี API Key, Token, รหัสผ่าน หรืออีเมลส่วนตัวอยู่ในไฟล์โค้ดหรือ `PROJECT_MEMORY.md` เด็ดขาด ต้องแยกเก็บใน `.env` และมีชื่อ `.env` อยู่ใน `.gitignore` เสมอ
2. **ตรวจโฟลเดอร์ทางลัด (`Junction Check`):** ตรวจว่า `.gitignore` และ `.vercelignore` มีรายชื่อ `Claude-AppData/`, `Gemini-App/`, `Gemini-AppData/`, `Gemini-Config/`, `.backups/`, และ `_to_delete/` ครบถ้วน
3. **ขออนุมัติก่อนส่งออกภายนอก (`HARD RULE 5 & 6`):** ต้องแสดงรายการไฟล์ที่จะส่ง (`git status -s`) และรอให้คุณ `nongton` ยืนยันก่อนรัน `git push` หรือ `vercel --prod`

## 2. ด่านตรวจลิขสิทธิ์และกฎการหารายได้ (สำหรับเป้าหมายปล่อยสาธารณะ C & หารายได้ D)
1. **COPY GATE (ข้อ 4):** ห้ามคัดลอกแมป โมเดล เสียง รูปภาพ หรือโค้ดที่มีลิขสิทธิ์ของเกมอื่นมาใช้ตรงๆ ต้องส่ง `COPY CARD` ให้คุณ `nongton` เลือกแนวทางที่ถูกสิทธิ์ และบันทึกแหล่งที่มาของแอสเซ็ตทุกชิ้นใน `ASSETS.md`
2. **กฎแพลตฟอร์มและการหารายได้ (Monetization Compliance):**
   - หากใช้ **Roblox:** ต้องตรวจกฎ Community Standards และกฎเรื่องกล่องสุ่ม (Paid Random Items ต้องแสดงโอกาสออกเป็นเปอร์เซ็นต์ชัดเจน) รวมถึงหักค่าธรรมเนียมแพลตฟอร์มตามจริง
   - หากใช้ **Godot (ปล่อยบน itch.io / Steam / เว็บ):** ต้องตรวจไลเซนส์ของฟอนต์ เสียง และโมเดลทุกชิ้นใน `ASSETS.md` ว่ารองรับการใช้งานเชิงพาณิชย์ (`Commercial Use Allowed` เช่น CC0 หรือ MIT)

