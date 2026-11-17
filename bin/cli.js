#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const PACKAGE_META = JSON.parse(fs.readFileSync(path.join(PACKAGE_ROOT, "package.json"), "utf8"));

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
  return `# PROJECT MEMORY (nongton Workspace)

Last Updated: ${isoDateStr}

## 1. Architecture & Key Decisions
- Team Workflow: 6 sequential roles with QA Gates: \`Lead > Deputy > Design UX/UI > Backend > Frontend > QA\`
- Game Dev Studio Rules: Loaded from \`.agents/rules/game-dev-master.md\`, \`game-dev-workflow-decisions.md\`, and \`game-dev-qa-kickoff.md\` (Master Prompt v1.1).
- Primary Trigger: Start prompts with \`nongton\` (or \`/nongton\` / \`เริ่มเซสชัน\`) to activate full 6-role development mode.
- Backup Policy: Back up any file to \`.backups/YYYYMMDD-HHMM/\` before editing. Never delete files; move obsolete files to \`_to_delete/\`.

## 2. User Profile & Preferences (nongton)
- Hardware & OS: Windows, AMD Ryzen 5 5600, 32 GB RAM, AMD Radeon RX Vega GPU (Strictly NO CUDA/NVIDIA tools).
- Default Web Style: Minimal Light (\`#FAF8F5\` background, \`#FFFFFF\` surface, \`#0F766E\` accent, Inter + Noto Sans Thai, bilingual TH/EN toggle).
- Communication: Thai explanations without emojis, English code/identifiers, brief explanation of technical terms in parentheses.

## Project Index
- (none yet — create projects inside \`projects/<project-name>/\`)
`;
}

function buildGameDocTemplates(isoDateStr) {
  return {
    "DECISIONS.md": `# DECISIONS LOG (บันทึกการตัดสินใจ)\n\n| วันที่ | เรื่อง | ตัวเลือก | ที่เลือก | เหตุผล |\n|---|---|---|---|---|\n| ${isoDateStr} | เริ่มโปรเจกต์เกม (Master Prompt v1.1) | A/B/C | รอตัดสินใจกลุ่มที่ 1 | รอผ่าน Technology Gate และ Concept Gate |\n`,
    "GDD.md": `# GAME DESIGN DOCUMENT (GDD ฉบับสั้น)\n\nLast Updated: ${isoDateStr}\n\n## 1. Core Concept & Tagline\n- สถานะ: รอล็อกที่ CONCEPT GATE (ข้อ 10)\n\n## 2. Core Loop\n- เลือกอาวุธ -> สู้ (ยิงศัตรู) -> ได้เงิน -> ซื้ออาวุธ/อัปเกรด -> วนซ้ำ\n\n## 3. Weapon & Economy Balance Table\n- รอกำหนดหลังผ่านการตัดสินใจกลุ่มที่ 1 และ 2\n`,
    "BACKLOG.md": `# BACKLOG (ไอเดียและงานค้าง)\n\n| รหัส | รายการ | สถานะ (เสนอ/อนุมัติ/ปฏิเสธ/เสร็จ) | หมายเหตุ |\n|---|---|---|---|\n| B-01 | ตัดสินใจกลุ่มที่ 1 (Engine + มุมกล้อง + คำโปรย + Concept Gate + เป้าหมาย) | เสนอ | บล็อกการเริ่มเขียนโค้ด |\n`,
    "CHANGELOG.md": `# CHANGELOG (บันทึกการเปลี่ยนแปลงทุกเซสชัน)\n\n## [${isoDateStr}] เซสชันเริ่มต้น\n- ติดตั้งระบบ \`nongton v${PACKAGE_META.version}\` และโครงสร้างไฟล์เอกสารเกมตาม Master Prompt v1.1 (ข้อ 13)\n`,
    "ASSETS.md": `# ASSETS REGISTRY (ทะเบียนแอสเซ็ตและไลเซนส์ - COPY GATE ข้อ 4)\n\n| ชื่อแอสเซ็ต | แหล่งที่มา | ผู้สร้าง | ไลเซนส์ | เงื่อนไขการใช้งาน |\n|---|---|---|---|---|\n| (ยังไม่มีแอสเซ็ตภายนอก) | - | - | - | ต้องผ่าน COPY GATE ก่อนนำมาใช้ |\n`,
    "TESTLOG.md": `# TEST LOG (บันทึกผลการทดสอบ - QA Protocol ข้อ 14)\n\nป้ายยืนยันที่ใช้: \`[ทดสอบแล้ว]\` | \`[ตรวจโค้ดแล้ว]\` | \`[ยังไม่ได้ทดสอบ]\`\n\n| วันที่ | ฟีเจอร์/การทดสอบ | ป้ายยืนยัน | วิธีทดสอบและผลลัพธ์ |\n|---|---|---|---|\n| ${isoDateStr} | โครงสร้างโปรเจกต์และกฎ Master Prompt v1.1 | [ทดสอบแล้ว] | ตรวจสอบผ่าน \`npx nongton status\` |\n`
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

function backupExistingRules(targetDir) {
  const stamp = formatTimestamp(new Date());
  const backupFolder = path.join(targetDir, ".backups", stamp);
  const rootRuleFiles = ["AGENTS.md", "CLAUDE.md"];
  for (const ruleFile of rootRuleFiles) {
    const fullRulePath = path.join(targetDir, ruleFile);
    if (fs.existsSync(fullRulePath)) {
      copyFileSafe(fullRulePath, path.join(backupFolder, ruleFile), true);
    }
  }
  const agentsDir = path.join(targetDir, ".agents");
  if (fs.existsSync(agentsDir)) {
    copyDirectoryRecursive(agentsDir, path.join(backupFolder, ".agents"), true);
  }
  return backupFolder;
}

function ensureGameDocuments(targetDir, isoDateStr) {
  const docMap = buildGameDocTemplates(isoDateStr);
  for (const [docName, docContent] of Object.entries(docMap)) {
    const docPath = path.join(targetDir, docName);
    if (!fs.existsSync(docPath)) {
      fs.writeFileSync(docPath, docContent, "utf8");
      console.log(`  - ${docName.padEnd(18)} : created game doc`);
    } else {
      console.log(`  - ${docName.padEnd(18)} : preserved existing file`);
    }
  }
}

function runInitCommand(targetDir, allowOverwrite, includeGameDocs) {
  console.log(`\n[nongton v${PACKAGE_META.version}] Initializing 6-role Agent AI workspace in: ${targetDir}\n`);

  const rootFiles = ["AGENTS.md", "CLAUDE.md", ".gitignore", ".vercelignore"];
  for (const fileName of rootFiles) {
    const srcFile = path.join(PACKAGE_ROOT, fileName);
    const destFile = path.join(targetDir, fileName);
    const copyStatus = copyFileSafe(srcFile, destFile, allowOverwrite);
    console.log(`  - ${fileName.padEnd(18)} : ${copyStatus}`);
  }

  copyDirectoryRecursive(path.join(PACKAGE_ROOT, ".agents"), path.join(targetDir, ".agents"), allowOverwrite);
  console.log(`  - .agents/           : installed (4 rules + 4 skills)`);

  ensureDirectory(path.join(targetDir, "projects"));
  ensureDirectory(path.join(targetDir, "_to_delete"));
  ensureDirectory(path.join(targetDir, ".backups"));
  console.log(`  - folders            : projects/, _to_delete/, .backups/ ready`);

  const todayStr = new Date().toISOString().slice(0, 10);
  const memoryPath = path.join(targetDir, "PROJECT_MEMORY.md");
  if (!fs.existsSync(memoryPath)) {
    fs.writeFileSync(memoryPath, buildStarterMemory(todayStr), "utf8");
    console.log(`  - PROJECT_MEMORY.md  : created starter memory`);
  } else {
    console.log(`  - PROJECT_MEMORY.md  : preserved existing file`);
  }

  if (includeGameDocs) {
    ensureGameDocuments(targetDir, todayStr);
  }

  console.log(`\nDone! Start any chat prompt with "nongton <คำสั่ง>", "/nongton <คำสั่ง>", or "เริ่มเซสชัน".\n`);
}

function runUpdateCommand(targetDir, includeGameDocs) {
  const backupLocation = backupExistingRules(targetDir);
  console.log(`\n[nongton v${PACKAGE_META.version}] Backed up existing files to: ${backupLocation}`);
  runInitCommand(targetDir, true, includeGameDocs);
}

function buildStatusChecks(targetDir) {
  return [
    ["AGENTS.md", path.join(targetDir, "AGENTS.md")],
    ["CLAUDE.md", path.join(targetDir, "CLAUDE.md")],
    ["PROJECT_MEMORY.md", path.join(targetDir, "PROJECT_MEMORY.md")],
    ["Rule: project-standards", path.join(targetDir, ".agents", "rules", "project-standards.md")],
    ["Rule: game-dev-master (1-5)", path.join(targetDir, ".agents", "rules", "game-dev-master.md")],
    ["Rule: game-dev-workflow (6-10)", path.join(targetDir, ".agents", "rules", "game-dev-workflow-decisions.md")],
    ["Rule: game-dev-qa-kickoff (11-20)", path.join(targetDir, ".agents", "rules", "game-dev-qa-kickoff.md")],
    ["Skill: nongton", path.join(targetDir, ".agents", "skills", "nongton", "SKILL.md")],
    ["Skill: game-builder", path.join(targetDir, ".agents", "skills", "game-builder", "SKILL.md")],
    ["Skill: deploy-helper", path.join(targetDir, ".agents", "skills", "deploy-helper", "SKILL.md")],
    ["Skill: code-coach", path.join(targetDir, ".agents", "skills", "code-coach", "SKILL.md")],
    ["Game Doc: DECISIONS.md", path.join(targetDir, "DECISIONS.md")],
    ["Game Doc: GDD.md", path.join(targetDir, "GDD.md")],
    ["Game Doc: BACKLOG.md", path.join(targetDir, "BACKLOG.md")],
    ["Game Doc: CHANGELOG.md", path.join(targetDir, "CHANGELOG.md")],
    ["Game Doc: ASSETS.md", path.join(targetDir, "ASSETS.md")],
    ["Game Doc: TESTLOG.md", path.join(targetDir, "TESTLOG.md")],
    ["Folder: projects/", path.join(targetDir, "projects")],
    ["Folder: _to_delete/", path.join(targetDir, "_to_delete")]
  ];
}

function runStatusCommand(targetDir) {
  const checks = buildStatusChecks(targetDir);
  console.log(`\n[nongton v${PACKAGE_META.version}] Workspace Status: ${targetDir}\n`);
  for (const [labelName, checkPath] of checks) {
    const existsFlag = fs.existsSync(checkPath) ? "READY" : "MISSING";
    console.log(`  [${existsFlag.padEnd(7)}] ${labelName}`);
  }
  console.log("");
}

function printHelpBanner() {
  console.log(`
nongton v${PACKAGE_META.version} — 6-Role Game & Web Development AI Agent Studio CLI

Usage:
  npx nongton init          Install AGENTS.md, CLAUDE.md, .agents/ (4 rules + 4 skills), and folders
  npx nongton init --game   Also scaffold Game Dev v1.1 docs (DECISIONS, GDD, BACKLOG, CHANGELOG, ASSETS, TESTLOG)
  npx nongton status        Check installed nongton rules, skills, game docs, and folders
  npx nongton update        Back up existing rules to .backups/ and update to latest nongton v1.1 templates
  npx nongton update --game Update rules and ensure all 6 Game Dev v1.1 docs exist
  npx nongton --version     Print version
`);
}

function main() {
  const cliArgs = process.argv.slice(2);
  const commandName = cliArgs[0] || "help";
  const hasForceFlag = cliArgs.includes("--force");
  const hasGameFlag = cliArgs.includes("--game");
  const targetDir = process.cwd();

  if (commandName === "--version" || commandName === "-v" || commandName === "version") {
    console.log(PACKAGE_META.version);
    return;
  }
  if (commandName === "init") {
    runInitCommand(targetDir, hasForceFlag, hasGameFlag);
    return;
  }
  if (commandName === "update") {
    runUpdateCommand(targetDir, hasGameFlag);
    return;
  }
  if (commandName === "status") {
    runStatusCommand(targetDir);
    return;
  }
  printHelpBanner();
}

main();
