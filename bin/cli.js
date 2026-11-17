#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
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
  return `# PROJECT MEMORY (nongton Workspace — Multifaceted Personal Assistant v1.3)

Last Updated: ${isoDateStr}

## 1. Architecture & Key Decisions
- Core Identity: Multifaceted Personal Assistant AI Agent with deep expertise across diverse domains and an integrated 6-role team for thorough research and information verification.
- Unified Command Trigger: Use \`/nongton <คำสั่ง>\` (or \`nongton <คำสั่ง>\`) for all tasks (Deep Research, Fact Verification, Project Planning, Web/Software Dev, Teaching/Unblock Mode, and Git/Vercel Deploy).
- Team Workflow: 6 sequential roles with QA Gates: \`Lead > Deputy/Research > Design/Structure > Backend/Analysis > Frontend/Presentation > QA/Fact-Checking\`
- Backup Policy: Back up any file to \`.backups/YYYYMMDD-HHMM/\` before editing. Never delete files; move obsolete files to \`_to_delete/\`.

## 2. User Profile & Preferences (nongton)
- Hardware & OS: Windows, AMD Ryzen 5 5600, 32 GB RAM, AMD Radeon RX Vega GPU (Strictly NO CUDA/NVIDIA tools).
- Default Web Style: Minimal Light (\`#FAF8F5\` background, \`#FFFFFF\` surface, \`#0F766E\` accent, Inter + Noto Sans Thai, bilingual TH/EN toggle).
- Communication: Thai explanations without emojis, English code/identifiers, brief explanation of technical terms in parentheses with comparisons to JS/Python.

## Project Index
- (none yet — create projects inside \`projects/<project-name>/\`)
`;
}

function buildGameDocTemplates(isoDateStr) {
  return {
    "DECISIONS.md": `# DECISIONS LOG (บันทึกการตัดสินใจ)\n\n| วันที่ | เรื่อง | ตัวเลือก | ที่เลือก | เหตุผล |\n|---|---|---|---|---|\n| ${isoDateStr} | เทคโนโลยีเอนจินเกมหลักของ nongton (ข้อ 5) | A/B/C/D | **A (Roblox Studio + Luau + Rojo) และ B (Godot + GDScript)** | รองรับทั้งเกมออนไลน์สนามประลองและเกมออฟไลน์/RPG อย่างเต็มประสิทธิภาพ |\n| ${isoDateStr} | มุมมองกล้องเริ่มต้นสำหรับเกมสไนเปอร์ | FPS / TPS | **FPS (มุมมองบุคคลที่หนึ่ง)** | เห็นมือและลำกล้องปืน ซูมสโคปได้เต็มอารมณ์ |\n| ${isoDateStr} | คำโปรยประจำเกมสไนเปอร์ (Tagline) | A / B | **B ("หลบให้พ้น เล็งให้แม่น และเป็นหนึ่งเดียวในสมรภูมิสไนเปอร์สุดเดือด!")** | กระชับ เร้าใจ ตรงฟีลสนามประลอง |\n| ${isoDateStr} | คอนเซ็ปต์เกม (CONCEPT GATE ข้อ 10.4) | 1 / 2 / 3 | **ตรวจสอบแนวเกมก่อนเสมอ (ถ้าทำเกมสไนเปอร์ ใช้แบบผสมผสานทั้ง 3 คอนเซ็ปต์)** | ยืดหยุ่นตามโปรเจกต์จริง และรวมจุดเด่นค่าหัว + บอท/บอส RPG + สนามเปลี่ยนสถานะ |\n| ${isoDateStr} | ปลายทางของโปรเจกต์ | A / B / C / D | **C (ปล่อยสาธารณะ) และ D (ต่อยอดหารายได้ในอนาคต)** | ต้องเน้น Server Authority กันโกง, COPY GATE ไม่ละเมิดลิขสิทธิ์, และถูกกฎแพลตฟอร์ม |\n`,
    "GDD.md": `# GAME DESIGN DOCUMENT (GDD ฉบับสั้น)\n\nLast Updated: ${isoDateStr}\n\n## 1. Core Concept & Tagline\n- กฎหลัก: ตรวจสอบแนวเกมที่จะสร้างก่อนเสมอ หากเป็นโปรเจกต์สไนเปอร์ ใช้คอนเซ็ปต์ผสมผสาน (Hybrid Sniper Arena: Bounty Streak + RPG Bot/Boss + Shifting Arena)\n- คำโปรย (Tagline B): "หลบให้พ้น เล็งให้แม่น และเป็นหนึ่งเดียวในสมรภูมิสไนเปอร์สุดเดือด!"\n- มุมมองกล้อง: FPS (First-Person Shooter)\n- เอนจินที่รองรับ: Roblox Studio (Luau + Rojo) และ Godot Engine (GDScript)\n\n## 2. Core Loop\n- เลือกอาวุธ -> ลงสนามยิงศัตรู/สะสมค่าหัว/ล่าบอส -> ได้เงินและเลเวล -> ซื้ออาวุธ/อัปเกรดสกิล -> วนซ้ำ\n`,
    "BACKLOG.md": `# BACKLOG (ไอเดียและงานค้าง)\n\n| รหัส | รายการ | สถานะ (เสนอ/อนุมัติ/ปฏิเสธ/เสร็จ) | หมายเหตุ |\n|---|---|---|---|\n| B-01 | ตัดสินใจกลุ่มที่ 1 (Engine A+B, กล้อง FPS, คำโปรย B, คอนเซ็ปต์ผสมผสาน, เป้าหมาย C+D) | เสร็จ | บันทึกใน DECISIONS.md แล้ว |\n| B-02 | เลือกโปรเจกต์แรกที่จะลงมือสร้างและตอบคำถามกลุ่มที่ 2 (Design ของ MVP) | เสนอ | สั่งผ่าน \`/nongton\` ได้ทันที |\n`,
    "CHANGELOG.md": `# CHANGELOG (บันทึกการเปลี่ยนแปลงทุกเซสชัน)\n\n## [${isoDateStr}] อัปเกรดระบบ nongton v${PACKAGE_META.version}\n- รวมศูนย์ทุกคำสั่งไว้ใน \`/nongton\` คำสั่งเดียว (Unified All-in-One Router)\n- บันทึกผลการตัดสินใจกลุ่มที่ 1 (Roblox+Rojo & Godot, FPS, Tagline B, Hybrid Concept, เป้าหมาย C+D)\n`,
    "ASSETS.md": `# ASSETS REGISTRY (ทะเบียนแอสเซ็ตและไลเซนส์ - COPY GATE ข้อ 4)\n\n| ชื่อแอสเซ็ต | แหล่งที่มา | ผู้สร้าง | ไลเซนส์ | เงื่อนไขการใช้งาน |\n|---|---|---|---|---|\n| (ยังไม่มีแอสเซ็ตภายนอก) | - | - | - | ต้องผ่าน COPY GATE ก่อนนำมาใช้เพื่อรองรับการปล่อยสาธารณะและหารายได้ |\n`,
    "TESTLOG.md": `# TEST LOG (บันทึกผลการทดสอบ - QA Protocol ข้อ 14)\n\nป้ายยืนยันที่ใช้: \`[ทดสอบแล้ว]\` | \`[ตรวจโค้ดแล้ว]\` | \`[ยังไม่ได้ทดสอบ]\`\n\n| วันที่ | ฟีเจอร์/การทดสอบ | ป้ายยืนยัน | วิธีทดสอบและผลลัพธ์ |\n|---|---|---|---|\n| ${isoDateStr} | ระบบคำสั่งเดียว \`/nongton\` และ \`npx nongton\` v${PACKAGE_META.version} | [ทดสอบแล้ว] | ตรวจสอบผ่าน \`npx nongton\` ขึ้น READY ครบทุกรายการ |\n`
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
      const archiveDest = path.join(targetDir, "_to_delete", `merged-skills-${stampStr}`, legacyName, "SKILL.md");
      copyFileSafe(legacySkillFile, archiveDest, true);
      fs.rmSync(legacySkillFile, { force: true });
    }
  }
}

function backupExistingRules(targetDir) {
  const stamp = formatTimestamp(new Date());
  const backupFolder = path.join(targetDir, ".backups", stamp);
  const rootRuleFiles = ["AGENTS.md", "CLAUDE.md"];
  let hasBackedUpAny = false;

  for (const ruleFile of rootRuleFiles) {
    const fullRulePath = path.join(targetDir, ruleFile);
    if (fs.existsSync(fullRulePath)) {
      copyFileSafe(fullRulePath, path.join(backupFolder, ruleFile), true);
      hasBackedUpAny = true;
    }
  }
  const agentsDir = path.join(targetDir, ".agents");
  if (fs.existsSync(agentsDir)) {
    copyDirectoryRecursive(agentsDir, path.join(backupFolder, ".agents"), true);
    hasBackedUpAny = true;
  }
  archiveLegacySkills(targetDir, stamp);
  return hasBackedUpAny ? backupFolder : null;
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
  console.log(`\n[nongton v${PACKAGE_META.version}] Setting up Unified /nongton Studio in: ${targetDir}\n`);

  const rootFiles = ["AGENTS.md", "CLAUDE.md", ".gitignore", ".vercelignore"];
  for (const fileName of rootFiles) {
    const srcFile = path.join(PACKAGE_ROOT, fileName);
    const destFile = path.join(targetDir, fileName);
    const copyStatus = copyFileSafe(srcFile, destFile, allowOverwrite);
    console.log(`  - ${fileName.padEnd(18)} : ${copyStatus}`);
  }

  copyDirectoryRecursive(path.join(PACKAGE_ROOT, ".agents"), path.join(targetDir, ".agents"), allowOverwrite);
  console.log(`  - .agents/           : installed (4 rules + unified /nongton skill & 4 references)`);

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
}

function buildStatusChecks(targetDir) {
  const refDir = path.join(targetDir, ".agents", "skills", "nongton", "references");
  return [
    ["AGENTS.md", path.join(targetDir, "AGENTS.md")],
    ["CLAUDE.md", path.join(targetDir, "CLAUDE.md")],
    ["PROJECT_MEMORY.md", path.join(targetDir, "PROJECT_MEMORY.md")],
    ["Rule: project-standards", path.join(targetDir, ".agents", "rules", "project-standards.md")],
    ["Rule: game-dev-master (1-5)", path.join(targetDir, ".agents", "rules", "game-dev-master.md")],
    ["Rule: game-dev-workflow (6-10)", path.join(targetDir, ".agents", "rules", "game-dev-workflow-decisions.md")],
    ["Rule: game-dev-qa-kickoff (11-20)", path.join(targetDir, ".agents", "rules", "game-dev-qa-kickoff.md")],
    ["Unified Skill: /nongton", path.join(targetDir, ".agents", "skills", "nongton", "SKILL.md")],
    ["Module: research-verification", path.join(refDir, "research-verification.md")],
    ["Module: web-studio (Minimal Light)", path.join(refDir, "web-studio.md")],
    ["Module: code-coach-unblock", path.join(refDir, "code-coach-unblock.md")],
    ["Module: deploy-security", path.join(refDir, "deploy-security.md")],
    ["Module: session-manager", path.join(refDir, "session-manager.md")],
    ["Module: game-studio-v1.2 (Roblox+Godot)", path.join(refDir, "game-studio-v1.2.md")],
    ["Folder: skills/game-builder", path.join(targetDir, ".agents", "skills", "game-builder", "REFERENCE.md")],
    ["Folder: skills/deploy-helper", path.join(targetDir, ".agents", "skills", "deploy-helper", "REFERENCE.md")],
    ["Folder: skills/code-coach", path.join(targetDir, ".agents", "skills", "code-coach", "REFERENCE.md")],
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
  console.log(`\nReady! Use a single command in chat: "/nongton <สั่งงานอะไรก็ได้>"\n`);
}

function runSmartSingleCommand(targetDir) {
  const backupLocation = backupExistingRules(targetDir);
  if (backupLocation) {
    console.log(`\n[nongton v${PACKAGE_META.version}] Backed up existing files to: ${backupLocation}`);
  }
  runInitCommand(targetDir, true, true);
  runStatusCommand(targetDir);
}

function printHelpBanner() {
  console.log(`
nongton v${PACKAGE_META.version} — Multifaceted Personal Assistant AI Agent (6-Role Research, Verification & Execution Team)

Single-Command Usage (Recommended):
  npx nongton               Auto-backup, install/update all rules + Unified /nongton assistant + docs, and verify status

Optional Subcommands:
  npx nongton init          Install without overwriting existing files
  npx nongton update        Back up existing rules to .backups/ and update to latest templates
  npx nongton status        Check installed nongton rules, unified skill modules, and docs
  npx nongton --version     Print version
`);
}

function main() {
  const cliArgs = process.argv.slice(2);
  const commandName = cliArgs[0] || "auto";
  const hasForceFlag = cliArgs.includes("--force");
  const hasGameFlag = cliArgs.includes("--game") || commandName === "auto";
  const targetDir = process.cwd();

  if (commandName === "--version" || commandName === "-v" || commandName === "version") {
    console.log(PACKAGE_META.version);
    return;
  }
  if (commandName === "--help" || commandName === "-h" || commandName === "help") {
    printHelpBanner();
    return;
  }
  if (commandName === "auto") {
    runSmartSingleCommand(targetDir);
    return;
  }
  if (commandName === "init") {
    runInitCommand(targetDir, hasForceFlag, hasGameFlag);
    return;
  }
  if (commandName === "update") {
    runSmartSingleCommand(targetDir);
    return;
  }
  if (commandName === "status") {
    runStatusCommand(targetDir);
    return;
  }
  runSmartSingleCommand(targetDir);
}

main();
