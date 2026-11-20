#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const PACKAGE_ROOT = path.resolve(__dirname, "..", "..");
const PACKAGE_META = JSON.parse(fs.readFileSync(path.join(PACKAGE_ROOT, "package.json"), "utf8"));
const LEGACY_SKILL_NAMES = ["game-builder", "deploy-helper", "code-coach"];

function formatTimestamp(nowDate) {
  const padTwo = (num) => String(num).padStart(2, "0");
  const year = nowDate.getFullYear();
  const month = padTwo(nowDate.getMonth() + 1);
  const day = padTwo(nowDate.getDate());
  const hour = padTwo(nowDate.getHours());
  const minute = padTwo(nowDate.getMinutes());
  return `${year}${month}${day}-${hour}${minute}`;
}

function buildStarterMemory(isoDateStr) {
  return `# PROJECT MEMORY (nongton Personal Assistant AI Agent v2.0)

Last Updated: ${isoDateStr}

## 1. Architecture & Key Decisions
- Source of Truth: \`PERSONAL_ASSISTANT_AGENT_BRIEF.md\` (Version 2.0).
- Core Identity: Personal Assistant AI Agent acting as experienced experts across a wide range of fields (Research, Web/Software, Academic/Writing, Design, Planning, and a Central Hub for Game Design & Development Tools).
- Internal Team (8 Roles): \`Lead > Deputy > Research > Verification (Fact-Checker / Numbers Auditor / Citation Auditor / Red-Team) > Specialists > Build (Design/Backend/Frontend) > QA > Memory Keeper\`.
- Verification System: Claim Ledger with 4 confidence labels (\`[ยืนยันแล้ว]\`, \`[น่าจะถูก]\`, \`[ไม่แน่ใจ]\`, \`[ยังตรวจไม่ได้]\`) and 3 verification depths (\`เบา / ปกติ / เข้ม\`).
- Backup Policy: Back up any file to \`.backups/YYYYMMDD-HHMM/\` before editing. Never delete files; move obsolete files to \`_to_delete/\` or \`_archive/\`.

## 2. User Profile & Preferences (nongton)
- Hardware & OS: Windows, AMD Ryzen 5 5600, 32 GB RAM, AMD Radeon RX Vega GPU (Strictly NO CUDA/NVIDIA tools).
- Default Web Style: Blue & White (\`#FFFFFF\` background, \`#F4F8FD\` surface, \`#1D4ED8\` primary blue accent, \`#0F172A\` navy-slate text, Inter + Noto Sans Thai, bilingual TH/EN toggle).
- Communication: Thai explanations without emojis, English code/identifiers, brief explanation of technical terms in parentheses with examples and comparisons.

## Project Index
- Active Domain Packs in \`.nongton-core/domains/\`: \`web-design-development\` (Web Specialist Pack v1.0), \`research-and-analysis\`, \`web-and-software\`, \`academic-and-writing\`, \`design-and-ux\`, \`planning-and-management\`, \`game-design-and-dev\`
`;
}

function buildRootMemoryTemplates(isoDateStr) {
  return {
    "DECISIONS.md": `# DECISIONS LOG (บันทึกการตัดสินใจ — Personal Assistant v2.0)\n\n| วันที่ | เรื่อง | ตัวเลือก | ที่เลือก | เหตุผล |\n|---|---|---|---|---|\n| ${isoDateStr} | บทบาทหลักของโปรเจกต์ | เอเจนต์สร้างเกมเฉพาะทาง vs ผู้ช่วยส่วนตัวหลายโดเมน | **Personal Assistant AI Agent & Multi-Domain Central Hub (v2.0)** | เป็นผู้ช่วยส่วนตัวระดับผู้เชี่ยวชาญหลายสาขา พร้อมทีมค้นคว้าและตรวจสอบข้อมูล และเป็นศูนย์กลางรวมเครื่องมือช่วยออกแบบ/พัฒนาเกมและงานทุกด้าน |\n| ${isoDateStr} | คำสั่งเรียกใช้งาน | แยกหลายคำสั่ง vs คำสั่งเดียว | **คำสั่งเดียว \`/nongton\` และ \`npx nongton\`** | สั่งงานทุกโดเมนผ่านคำสั่งเดียวโดยไม่ต้องจำคำสั่งแยก |\n`,
    "BACKLOG.md": `# BACKLOG (ไอเดียและงานค้าง — Personal Assistant v2.0)\n\n| รหัส | รายการ | สถานะ (เสนอ/อนุมัติ/ปฏิเสธ/เสร็จ) | หมายเหตุ |\n|---|---|---|---|\n| B-01 | อัปเกรดระบบเป็น Personal Assistant AI Agent v2.0 ตาม \`PERSONAL_ASSISTANT_AGENT_BRIEF.md\` | เสร็จ | มีครบทั้ง 8 บทบาท, Claim Ledger, \`SOURCES.md\`, และ \`domains/\` 6 สาขา |\n| B-02 | ย้ายไฟล์เฉพาะของโปรเจกต์เกมเดิมไปเก็บใน \`_archive/\` | เสร็จ | ไม่ลบไฟล์ และติดป้ายเลิกใช้ที่บรรทัดแรกเรียบร้อย |\n`,
    "CHANGELOG.md": `# CHANGELOG (บันทึกการเปลี่ยนแปลงทุกเซสชัน)\n\n## [${isoDateStr}] อัปเกรดสู่ Personal Assistant AI Agent v2.0\n- ติดตั้ง \`PERSONAL_ASSISTANT_AGENT_BRIEF.md\` (v2.0) เป็นความจริงหลักของโปรเจกต์\n- อัปเดตทีมภายในเป็น 8 บทบาท พร้อมระบบตรวจสอบ \`Claim Ledger\` (\`Fact-Checker\`, \`Numbers Auditor\`, \`Citation Auditor\`, \`Red-Team\`)\n- สร้างโฟลเดอร์ \`domains/\` พร้อม Domain Pack 6 สาขา (รวมถึงศูนย์กลางเครื่องมือช่วยออกแบบและพัฒนาเกม)\n- สร้างไฟล์ \`SOURCES.md\` และย้ายเอกสารเกมเก่าไปเก็บใน \`_archive/\`\n`,
    "SOURCES.md": `# SOURCES REGISTRY (ทะเบียนแหล่งข้อมูลที่เชื่อถือได้ — Brief v2.0 ข้อ 5.3 & ข้อ 9)\n\n| ชื่อแหล่งข้อมูล / เอกสาร | โดเมน | ระดับความน่าเชื่อถือ (ระดับ 1–4) | วันที่ตรวจล่าสุด | หมายเหตุ |\n|---|---|---|---|---|\n| MDN Web Docs (developer.mozilla.org) | พัฒนาเว็บและซอฟต์แวร์ | ระดับ 1 (แหล่งต้นทางทางการ) | ${isoDateStr} | เอกสารมาตรฐาน HTML/CSS/JS |\n| Python & Node.js Official Docs | พัฒนาเว็บและซอฟต์แวร์ | ระดับ 1 (แหล่งต้นทางทางการ) | ${isoDateStr} | เอกสารมาตรฐานภาษาและรันไทม์ |\n| Roblox Creator Docs & Godot Docs | ศูนย์กลางเครื่องมือเกม | ระดับ 1 (แหล่งต้นทางทางการ) | ${isoDateStr} | เอกสารอ้างอิงเมื่อช่วยออกแบบ/เขียนโค้ดเกม |\n`
  };
}

function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function copyFileSafe(sourcePath, targetPath, allowOverwrite) {
  if (!fs.existsSync(sourcePath)) {
    return "missing-source";
  }
  if (fs.existsSync(targetPath) && !allowOverwrite) {
    return "skipped";
  }
  ensureDirectory(path.dirname(targetPath));
  fs.copyFileSync(sourcePath, targetPath);
  return "copied";
}

function copyDirectoryRecursive(sourceDir, targetDir, allowOverwrite) {
  if (!fs.existsSync(sourceDir)) {
    return;
  }
  ensureDirectory(targetDir);
  const dirEntries = fs.readdirSync(sourceDir, { withFileTypes: true });
  for (const dirEntry of dirEntries) {
    const srcEntryPath = path.join(sourceDir, dirEntry.name);
    const destEntryPath = path.join(targetDir, dirEntry.name);
    if (dirEntry.isDirectory()) {
      copyDirectoryRecursive(srcEntryPath, destEntryPath, allowOverwrite);
    } else {
      copyFileSafe(srcEntryPath, destEntryPath, allowOverwrite);
    }
  }
}

function archiveLegacySkills(targetDir, stampStr) {
  const skillsRoot = path.join(targetDir, ".agents", "skills");
  if (!fs.existsSync(skillsRoot)) {
    return;
  }
  for (const legacyName of LEGACY_SKILL_NAMES) {
    const legacySkillFile = path.join(skillsRoot, legacyName, "SKILL.md");
    if (fs.existsSync(legacySkillFile)) {
      const archiveDest = path.join(targetDir, ".storage", "_to_delete", `merged-skills-${stampStr}`, legacyName, "SKILL.md");
      copyFileSafe(legacySkillFile, archiveDest, true);
      fs.rmSync(legacySkillFile, { force: true });
    }
  }
}

function backupExistingRules(targetDir) {
  const stamp = formatTimestamp(new Date());
  const backupFolder = path.join(targetDir, ".storage", ".backups", stamp);
  const rootRuleFiles = [
    "AGENTS.md",
    path.join(".nongton-core", "context", "PERSONAL_ASSISTANT_AGENT_BRIEF.md")
  ];
  let hasBackedUpAny = false;

  for (const ruleFile of rootRuleFiles) {
    const fullRulePath = path.join(targetDir, ruleFile);
    if (fs.existsSync(fullRulePath)) {
      copyFileSafe(fullRulePath, path.join(backupFolder, ruleFile), true);
      hasBackedUpAny = true;
    }
  }
  for (const dirName of [".agents", path.join(".nongton-core", "domains")]) {
    const fullDir = path.join(targetDir, dirName);
    if (fs.existsSync(fullDir)) {
      copyDirectoryRecursive(fullDir, path.join(backupFolder, dirName), true);
      hasBackedUpAny = true;
    }
  }
  archiveLegacySkills(targetDir, stamp);
  return hasBackedUpAny ? backupFolder : null;
}

function ensureRootMemoryDocs(targetDir, isoDateStr) {
  const docMap = buildRootMemoryTemplates(isoDateStr);
  const contextDir = path.join(targetDir, ".nongton-core", "context");
  ensureDirectory(contextDir);
  for (const [docName, docContent] of Object.entries(docMap)) {
    const docPath = path.join(contextDir, docName);
    if (!fs.existsSync(docPath)) {
      fs.writeFileSync(docPath, docContent, "utf8");
      console.log(`  - .nongton-core/context/${docName.padEnd(14)} : created memory doc`);
    } else {
      console.log(`  - .nongton-core/context/${docName.padEnd(14)} : preserved existing file`);
    }
  }
}

function runInitCommand(targetDir, allowOverwrite) {
  console.log(`\n[nongton v${PACKAGE_META.version}] Setting up Personal Assistant AI Agent & Multi-Domain Hub in: ${targetDir}\n`);

  const rootFiles = [
    "AGENTS.md",
    ".gitignore",
    path.join(".nongton-core", "context", "PERSONAL_ASSISTANT_AGENT_BRIEF.md"),
    path.join(".nongton-core", "skills-lock.json"),
    path.join(".vscode", "settings.json")
  ];
  for (const fileName of rootFiles) {
    const srcFile = path.join(PACKAGE_ROOT, fileName);
    const destFile = path.join(targetDir, fileName);
    const copyStatus = copyFileSafe(srcFile, destFile, allowOverwrite);
    console.log(`  - ${fileName.padEnd(34)} : ${copyStatus}`);
  }

  copyDirectoryRecursive(path.join(PACKAGE_ROOT, ".agents"), path.join(targetDir, ".agents"), allowOverwrite);
  console.log(`  - .agents/                           : installed (rules + unified /nongton skill & 7 references)`);

  copyDirectoryRecursive(path.join(PACKAGE_ROOT, ".nongton-core", "domains"), path.join(targetDir, ".nongton-core", "domains"), allowOverwrite);
  console.log(`  - .nongton-core/domains/             : installed (7 multi-domain expert packs incl. Web Design & Dev Specialist)`);

  for (const dirName of [
    "projects",
    path.join(".storage", "_archive"),
    path.join(".storage", "_to_delete"),
    path.join(".storage", ".backups")
  ]) {
    ensureDirectory(path.join(targetDir, dirName));
  }
  console.log(`  - folders                            : projects/, .storage/(_archive, _to_delete, .backups) ready`);

  const todayStr = new Date().toISOString().slice(0, 10);
  const memoryPath = path.join(targetDir, ".nongton-core", "context", "PROJECT_MEMORY.md");
  ensureDirectory(path.dirname(memoryPath));
  if (!fs.existsSync(memoryPath)) {
    fs.writeFileSync(memoryPath, buildStarterMemory(todayStr), "utf8");
    console.log(`  - .nongton-core/context/PROJECT_MEMORY.md : created starter memory`);
  } else {
    console.log(`  - .nongton-core/context/PROJECT_MEMORY.md : preserved existing file`);
  }

  ensureRootMemoryDocs(targetDir, todayStr);
}

function buildStatusChecks(targetDir) {
  const refDir = path.join(targetDir, ".agents", "skills", "nongton", "references");
  const coreDir = path.join(targetDir, ".nongton-core");
  const ctxDir = path.join(coreDir, "context");
  const domDir = path.join(coreDir, "domains");
  const storageDir = path.join(targetDir, ".storage");
  return [
    ["AGENTS.md (Root Entrypoint)", path.join(targetDir, "AGENTS.md")],
    ["Core Brief: .nongton-core/context/PERSONAL_ASSISTANT_AGENT_BRIEF.md", path.join(ctxDir, "PERSONAL_ASSISTANT_AGENT_BRIEF.md")],
    ["Memory: .nongton-core/context/PROJECT_MEMORY.md", path.join(ctxDir, "PROJECT_MEMORY.md")],
    ["Memory: .nongton-core/context/DECISIONS.md", path.join(ctxDir, "DECISIONS.md")],
    ["Memory: .nongton-core/context/BACKLOG.md", path.join(ctxDir, "BACKLOG.md")],
    ["Memory: .nongton-core/context/CHANGELOG.md", path.join(ctxDir, "CHANGELOG.md")],
    ["Memory: .nongton-core/context/SOURCES.md", path.join(ctxDir, "SOURCES.md")],
    ["Core Lock: .nongton-core/skills-lock.json", path.join(coreDir, "skills-lock.json")],
    ["IDE Config: .vscode/settings.json", path.join(targetDir, ".vscode", "settings.json")],
    ["Rule: project-standards", path.join(targetDir, ".agents", "rules", "project-standards.md")],
    ["Unified Skill: /nongton", path.join(targetDir, ".agents", "skills", "nongton", "SKILL.md")],
    ["Ref: master-brief-v2.0 (Unlimited)", path.join(refDir, "master-brief-v2.0.md")],
    ["Ref: research-verification (Claim Ledger)", path.join(refDir, "research-verification.md")],
    ["Ref: web-studio (Blue & White)", path.join(refDir, "web-studio.md")],
    ["Ref: code-coach-unblock", path.join(refDir, "code-coach-unblock.md")],
    ["Ref: deploy-security", path.join(refDir, "deploy-security.md")],
    ["Ref: session-manager", path.join(refDir, "session-manager.md")],
    ["Ref: game-dev-hub", path.join(refDir, "game-dev-hub.md")],
    ["Domain: .nongton-core/domains/web-design-development (Specialist)", path.join(domDir, "web-design-development.md")],
    ["Domain: .nongton-core/domains/research-and-analysis", path.join(domDir, "research-and-analysis.md")],
    ["Domain: .nongton-core/domains/web-and-software", path.join(domDir, "web-and-software.md")],
    ["Domain: .nongton-core/domains/academic-and-writing", path.join(domDir, "academic-and-writing.md")],
    ["Domain: .nongton-core/domains/design-and-ux", path.join(domDir, "design-and-ux.md")],
    ["Domain: .nongton-core/domains/planning-and-management", path.join(domDir, "planning-and-management.md")],
    ["Domain: .nongton-core/domains/game-design-and-dev (Hub)", path.join(domDir, "game-design-and-dev.md")],
    ["Storage: .storage/_archive/", path.join(storageDir, "_archive")],
    ["Storage: .storage/_to_delete/", path.join(storageDir, "_to_delete")],
    ["Storage: .storage/.backups/", path.join(storageDir, ".backups")],
    ["Folder: projects/", path.join(targetDir, "projects")]
  ];
}

function runStatusCommand(targetDir) {
  const checks = buildStatusChecks(targetDir);
  console.log(`\n[nongton v${PACKAGE_META.version}] Personal Assistant Workspace Status: ${targetDir}\n`);
  for (const [labelName, checkPath] of checks) {
    const existsFlag = fs.existsSync(checkPath) ? "READY" : "MISSING";
    console.log(`  [${existsFlag.padEnd(7)}] ${labelName}`);
  }
  console.log(`\nReady! Use a single command in chat: "/nongton <สั่งงานได้ทุกโดเมน>"\n`);
}

function runSmartSingleCommand(targetDir) {
  const backupLocation = backupExistingRules(targetDir);
  if (backupLocation) {
    console.log(`\n[nongton v${PACKAGE_META.version}] Backed up existing files to: ${backupLocation}`);
  }
  runInitCommand(targetDir, true);
  runStatusCommand(targetDir);
}

function printHelpBanner() {
  console.log(`
nongton v${PACKAGE_META.version} — Personal Assistant AI Agent & Multi-Domain Expert Hub

Single-Command Usage (Recommended):
  npx nongton               Auto-backup, install/update Personal Assistant v2.0 rules, domains, memory, and verify status

Optional Subcommands:
  npx nongton init          Install without overwriting existing files
  npx nongton update        Back up existing rules to .backups/ and update to latest v2.0 templates
  npx nongton status        Check installed nongton rules, domain packs, and memory files
  npx nongton --version     Print version
`);
}

function main() {
  const cliArgs = process.argv.slice(2);
  const commandName = cliArgs[0] || "auto";
  const hasForceFlag = cliArgs.includes("--force");
  const targetDir = process.cwd();

  if (commandName === "--version" || commandName === "-v" || commandName === "version") {
    console.log(PACKAGE_META.version);
    return;
  }
  if (commandName === "--help" || commandName === "-h" || commandName === "help") {
    printHelpBanner();
    return;
  }
  if (commandName === "init") {
    runInitCommand(targetDir, hasForceFlag);
    return;
  }
  if (commandName === "status") {
    runStatusCommand(targetDir);
    return;
  }
  runSmartSingleCommand(targetDir);
}

main();
