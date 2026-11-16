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
- Primary Trigger: Start prompts with \`nongton\` (or \`/nongton\`) to activate full 6-role development mode.
- Backup Policy: Back up any file to \`.backups/YYYYMMDD-HHMM/\` before editing. Never delete files; move obsolete files to \`_to_delete/\`.

## 2. User Profile & Preferences (nongton)
- Hardware & OS: Windows, AMD Ryzen 5 5600, 32 GB RAM, AMD Radeon RX Vega GPU (Strictly NO CUDA/NVIDIA tools).
- Default Web Style: Minimal Light (\`#FAF8F5\` background, \`#FFFFFF\` surface, \`#0F766E\` accent, Inter + Noto Sans Thai, bilingual TH/EN toggle).
- Communication: Thai explanations without emojis, English code/identifiers, brief explanation of technical terms in parentheses.

## Project Index
- (none yet — create projects inside \`projects/<project-name>/\`)
`;
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
  const agentsFile = path.join(targetDir, "AGENTS.md");
  const agentsDir = path.join(targetDir, ".agents");

  if (fs.existsSync(agentsFile)) {
    copyFileSafe(agentsFile, path.join(backupFolder, "AGENTS.md"), true);
  }
  if (fs.existsSync(agentsDir)) {
    copyDirectoryRecursive(agentsDir, path.join(backupFolder, ".agents"), true);
  }
  return backupFolder;
}

function runInitCommand(targetDir, allowOverwrite) {
  console.log(`\n[nongton v${PACKAGE_META.version}] Initializing 6-role Agent AI workspace in: ${targetDir}\n`);

  const rootFiles = ["AGENTS.md", ".gitignore", ".vercelignore"];
  for (const fileName of rootFiles) {
    const srcFile = path.join(PACKAGE_ROOT, fileName);
    const destFile = path.join(targetDir, fileName);
    const copyStatus = copyFileSafe(srcFile, destFile, allowOverwrite);
    console.log(`  - ${fileName.padEnd(18)} : ${copyStatus}`);
  }

  copyDirectoryRecursive(path.join(PACKAGE_ROOT, ".agents"), path.join(targetDir, ".agents"), allowOverwrite);
  console.log(`  - .agents/           : installed (rules + 4 skills)`);

  ensureDirectory(path.join(targetDir, "projects"));
  ensureDirectory(path.join(targetDir, "_to_delete"));
  ensureDirectory(path.join(targetDir, ".backups"));
  console.log(`  - folders            : projects/, _to_delete/, .backups/ ready`);

  const memoryPath = path.join(targetDir, "PROJECT_MEMORY.md");
  if (!fs.existsSync(memoryPath)) {
    const todayStr = new Date().toISOString().slice(0, 10);
    fs.writeFileSync(memoryPath, buildStarterMemory(todayStr), "utf8");
    console.log(`  - PROJECT_MEMORY.md  : created starter memory`);
  } else {
    console.log(`  - PROJECT_MEMORY.md  : preserved existing file`);
  }

  console.log(`\nDone! Start any chat prompt with "nongton <คำสั่ง>" or "/nongton <คำสั่ง>".\n`);
}

function runUpdateCommand(targetDir) {
  const backupLocation = backupExistingRules(targetDir);
  console.log(`\n[nongton v${PACKAGE_META.version}] Backed up existing files to: ${backupLocation}`);
  runInitCommand(targetDir, true);
}

function runStatusCommand(targetDir) {
  const checks = [
    ["AGENTS.md", path.join(targetDir, "AGENTS.md")],
    ["PROJECT_MEMORY.md", path.join(targetDir, "PROJECT_MEMORY.md")],
    ["Rule: project-standards", path.join(targetDir, ".agents", "rules", "project-standards.md")],
    ["Skill: nongton", path.join(targetDir, ".agents", "skills", "nongton", "SKILL.md")],
    ["Skill: game-builder", path.join(targetDir, ".agents", "skills", "game-builder", "SKILL.md")],
    ["Skill: deploy-helper", path.join(targetDir, ".agents", "skills", "deploy-helper", "SKILL.md")],
    ["Skill: code-coach", path.join(targetDir, ".agents", "skills", "code-coach", "SKILL.md")],
    ["Folder: projects/", path.join(targetDir, "projects")],
    ["Folder: _to_delete/", path.join(targetDir, "_to_delete")]
  ];

  console.log(`\n[nongton v${PACKAGE_META.version}] Workspace Status: ${targetDir}\n`);
  for (const [labelName, checkPath] of checks) {
    const existsFlag = fs.existsSync(checkPath) ? "READY" : "MISSING";
    console.log(`  [${existsFlag.padEnd(7)}] ${labelName}`);
  }
  console.log("");
}

function printHelpBanner() {
  console.log(`
nongton v${PACKAGE_META.version} — 6-Role Game & Web Development AI Agent CLI

Usage:
  npx nongton init          Install AGENTS.md, .agents/ (rules + 4 skills), and folders into current project
  npx nongton status        Check installed nongton rules, skills, and folders in current project
  npx nongton update        Back up existing rules to .backups/ and update to latest nongton templates
  npx nongton --version     Print version
`);
}

function main() {
  const cliArgs = process.argv.slice(2);
  const commandName = cliArgs[0] || "help";
  const hasForceFlag = cliArgs.includes("--force");
  const targetDir = process.cwd();

  if (commandName === "--version" || commandName === "-v" || commandName === "version") {
    console.log(PACKAGE_META.version);
    return;
  }
  if (commandName === "init") {
    runInitCommand(targetDir, hasForceFlag);
    return;
  }
  if (commandName === "update") {
    runUpdateCommand(targetDir);
    return;
  }
  if (commandName === "status") {
    runStatusCommand(targetDir);
    return;
  }
  printHelpBanner();
}

main();

