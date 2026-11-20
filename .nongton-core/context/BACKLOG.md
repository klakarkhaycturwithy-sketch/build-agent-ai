# BACKLOG (ไอเดียและงานค้าง — Personal Assistant v2.0)

| รหัส | รายการ | สถานะ (เสนอ/อนุมัติ/ปฏิเสธ/เสร็จ) | หมายเหตุ |
|---|---|---|---|
| B-01 | อัปเกรดระบบเป็น Personal Assistant AI Agent v2.0 ตาม `PERSONAL_ASSISTANT_AGENT_BRIEF.md` | เสร็จ | มีครบทั้ง 8 บทบาท, Claim Ledger, `SOURCES.md`, และ `domains/` 6 สาขา (รวมศูนย์กลางเครื่องมือช่วยออกแบบและพัฒนาเกม) |
| B-02 | ย้ายไฟล์เฉพาะของโปรเจกต์เกมเดิมไปเก็บใน `_archive/` | เสร็จ | ไม่ลบไฟล์ และติดป้ายเลิกใช้ที่บรรทัดแรกเรียบร้อย |
| B-03 | ล็อกการตัดสินใจ TECH DECISION GATE ทั้ง 5 ข้อ (ข้อ 10) | เสร็จ | บันทึกใน `DECISIONS.md` เรียบร้อยแล้ว |
| B-04 | ขยายพื้นที่เก็บข้อมูลเพิ่มเติมแบบไม่จำกัด (Method 2: Expanded Unlimited Knowledge Vault ใน `domains/*.md` และ `.agents/skills/nongton/references/*.md`) **โดยคืนค่าเนื้อหาเต็ม 100% ของ `AGENTS.md` และห้ามย่อ/ลดขนาดไฟล์งานเดิมเด็ดขาด** | เสร็จ | พื้นที่เก็บข้อมูลรวมเพิ่มขึ้นเป็นไม่จำกัด โดยไม่ลดขนาดไฟล์เดิม |
| B-05 | แผนต่อยอดระยะถัดไป (เมื่อคุณ `nongton` สั่งเริ่ม): เชื่อมต่อช่องทางเสริม `(b) แอปบนเว็บ (Web Dashboard)` และ `(d) บอตผ่านแชท (เช่น LINE Bot)` เข้ากับสมอง `/nongton` | อนุมัติ (พร้อมเริ่มเมื่อสั่ง) | เฟสปัจจุบันใช้งาน `(a) Antigravity/IDE` + `(c) npx nongton CLI` ได้สมบูรณ์ 100% |
| B-06 | ติดตั้ง `Web Design & Development Specialist Pack (v1.0)` ที่ `.nongton-core/domains/web-design-development.md` และยกระดับ Prompt หลักเป็น Senior Web Design & Development Lead (Spec Card ตัวเลือก A) | เสร็จ | ครบ 15 หัวข้อ, ปรับ Path เข้า `.nongton-core/`, ตรวจ Core Web Vitals/WCAG 2.2 + รันสคริปต์คำนวณ Contrast Ratio และทดสอบ `cli.js status` ผ่านครบ 100% |
