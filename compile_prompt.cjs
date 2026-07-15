const fs = require('fs');
const path = require('path');

const configDir = 'C:\\Users\\apilp\\.gemini\\config';

const coreFiles = [
  path.join(configDir, 'AGENTS.md'),
  path.join(configDir, 'director_os_master_workflow.txt'),
  path.join(configDir, 'skills', '00_MASTER_OS.md'),
  path.join(configDir, 'skills', 'cinemaskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'promptskill', 'SKILL.md'),
];

const dynamicSkills = {
  storyskill: path.join(configDir, 'skills', 'storyskill', 'SKILL.md'),
  writerskill: path.join(configDir, 'skills', 'writerskill', 'SKILL.md'),
  fashionskill: path.join(configDir, 'skills', 'fashionskill', 'SKILL.md'),
  indoskill: path.join(configDir, 'skills', 'indoskill', 'SKILL.md'),
  japanskill: path.join(configDir, 'skills', 'japanskill', 'SKILL.md'),
  ugcskill: path.join(configDir, 'skills', 'ugcskill', 'SKILL.md'),
  audioskill: path.join(configDir, 'skills', 'audioskill', 'SKILL.md'),
  videoorchestra: path.join(configDir, 'skills', 'videoorchestra', 'SKILL.md'),
  charsheet: path.join(configDir, 'skills', 'charsheet', 'SKILL.md'),
  envsheet: path.join(configDir, 'skills', 'envsheet', 'SKILL.md'),
  propsheet: path.join(configDir, 'skills', 'propsheet', 'SKILL.md'),
};

function readSafe(filePath) {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  }
  return '';
}

let jsOutput = `// src/system-prompt.js
// AUTO-GENERATED: DYNAMIC AUTEUR ROUTER (RAG-STYLE)

const coreEngine = \`
${coreFiles.map(f => readSafe(f)).join('\\n\\n')}
\`;

const skills = {
`;

for (const [key, filePath] of Object.entries(dynamicSkills)) {
  jsOutput += `  ${key}: \`${readSafe(filePath)}\`,\n`;
}

jsOutput += `};

export function getSystemPrompt(engine, userMessage) {
  const msg = userMessage.toLowerCase();
  let dynamicInjection = "";

  // 1. CULTURAL AESTHETICS ROUTER
  if (msg.includes('indo') || msg.includes('jawa') || msg.includes('jakarta') || msg.includes('kebaya') || msg.includes('tawuran') || msg.includes('silat')) {
    dynamicInjection += "\\n\\n--- INDOSKILL ---\\n" + skills.indoskill;
  }
  if (msg.includes('jepang') || msg.includes('japan') || msg.includes('yakuza') || msg.includes('samurai') || msg.includes('anime')) {
    dynamicInjection += "\\n\\n--- JAPANSKILL ---\\n" + skills.japanskill;
  }
  if (msg.includes('fashion') || msg.includes('baju') || msg.includes('model') || msg.includes('balenciaga') || msg.includes('mugler')) {
    dynamicInjection += "\\n\\n--- FASHIONSKILL ---\\n" + skills.fashionskill;
  }

  // 2. PLATFORM / FORMAT ROUTER
  if (msg.includes('ugc') || msg.includes('tiktok') || msg.includes('reels') || msg.includes('selfie') || msg.includes('vlog')) {
    dynamicInjection += "\\n\\n--- UGCSKILL ---\\n" + skills.ugcskill;
  }

  // 3. AUDIO & DIALOGUE ROUTER
  if (msg.includes('suara') || msg.includes('audio') || msg.includes('ngomong') || msg.includes('dialog') || msg.includes('bicara')) {
    dynamicInjection += "\\n\\n--- AUDIOSKILL ---\\n" + skills.audioskill;
  }

  // 4. STORY & SCRIPT ROUTER
  if (msg.includes('cerita') || msg.includes('naskah') || msg.includes('plot') || msg.includes('hook') || msg.includes('konsep')) {
    dynamicInjection += "\\n\\n--- STORYSKILL & WRITERSKILL ---\\n" + skills.storyskill + "\\n" + skills.writerskill;
  }

  // 5. MULTI-CLIP ORCHESTRATION ROUTER (Time/Duration)
  const isMultiClip = msg.includes('menit') || msg.includes('orchestra') || msg.match(/\\b(1[1-9]|[2-9][0-9]|100)\\s*detik\\b/);
  if (isMultiClip) {
    dynamicInjection += "\\n\\n--- MULTI-CLIP BLUEPRINTS ---\\n" + skills.videoorchestra + "\\n" + skills.charsheet + "\\n" + skills.envsheet + "\\n" + skills.propsheet;
  }

  return \`You are THE DIRECTOR O.S. V16.4.

\${coreEngine}

\${dynamicInjection}

=================================
USER RENDER ENGINE SELECTION: \${engine.toUpperCase()}
FORMAT YOUR RESPONSE AS FOLLOWS:
Do not converse. Output only the prompt blueprint.
Include a brief explanation block at the top, followed by the EXACT prompt block inside a markdown code block, followed by a V16.4 Compliance Audit table.
\`;
}
`;

fs.writeFileSync('src/system-prompt.js', jsOutput);
console.log('Dynamic system-prompt.js has been generated successfully!');
