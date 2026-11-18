# Session & Memory Manager Reference (Brief v2.0 ข้อ 9)

คู่มือจัดการความจำข้ามเซสชัน (`Memory Keeper`) และการสำรองไฟล์ประจำผู้ช่วยส่วนตัว `/nongton`

## 1. โครงสร้างไฟล์ความจำใน `.nongton-core/` และ `.storage/`
- `.nongton-core/context/PERSONAL_ASSISTANT_AGENT_BRIEF.md` — ความจริงหลักของโปรเจกต์ (เวอร์ชัน 2.0)
- `.nongton-core/context/PROJECT_MEMORY.md` — สถาปัตยกรรม การตัดสินใจ ความชอบผู้ใช้ บทเรียน
- `.nongton-core/context/DECISIONS.md` — บันทึกการตัดสินใจ (`วันที่ | เรื่อง | ตัวเลือก | ที่เลือก | เหตุผล`)
- `.nongton-core/context/BACKLOG.md` — ไอเดียและงานค้าง (`เสนอ | อนุมัติ | ปฏิเสธ | เสร็จ`)
- `.nongton-core/context/CHANGELOG.md` — บันทึกการเปลี่ยนแปลงทุกเซสชัน
- `.nongton-core/context/SOURCES.md` — แหล่งข้อมูลที่ใช้บ่อย + ระดับความน่าเชื่อถือ (1–4) + วันที่ตรวจล่าสุด
- `.nongton-core/domains/` — เก็บไฟล์ Domain Pack (`.nongton-core/domains/<ชื่อ>.md`) ของแต่ละสาขา
- `.storage/_archive/` (เอกสารเก่าที่เลิกใช้), `.storage/.backups/` (สำเนาก่อนแก้), `.storage/_to_delete/` (ไฟล์ที่ย้ายออกแทนการลบ)

## 2. ขั้นตอนของ Memory Keeper
- **เริ่มเซสชัน:** อ่านไฟล์ข้างต้นจาก `.nongton-core/context/` แล้วสรุปสั้นๆ **3 บรรทัด**: ทำถึงไหน / ติดอะไร / ขั้นต่อไป
- **จบเซสชัน:** สำรองไฟล์ลง `.storage/.backups/YYYYMMDD-HHMM/` ก่อนแก้ แล้วอัปเดตการตัดสินใจ ความชอบ บทเรียน และจุดที่เคยเข้าใจผิดกับผู้ใช้
- ข้อมูลที่เปลี่ยนได้ (ราคา เวอร์ชัน กฎ) ต้องบันทึกวันที่ตรวจล่าสุดไว้ใน `.nongton-core/context/SOURCES.md` และตรวจใหม่ก่อนใช้ซ้ำ
