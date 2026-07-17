const fs = require('fs');
const path = require('path');

const configDir = 'C:\\Users\\apilp\\.gemini\\config';

const coreFiles = [
  path.join(configDir, 'AGENTS.md'),
  path.join(configDir, 'director_os_master_workflow.txt'),
  path.join(configDir, 'skills', '00_MASTER_OS.md'),
  path.join(configDir, 'skills', 'cinemaskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'promptskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'storyskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'writerskill', 'SKILL.md'),
];

const dynamicSkills = {
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

export function getSystemPrompt(engine, userMessage, mode = 'mini') {
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



  // 5. MULTI-CLIP ORCHESTRATION ROUTER (Time/Duration)
  const isMultiClip = msg.includes('menit') || msg.includes('orchestra') || msg.match(/\\b(1[1-9]|[2-9][0-9]|100)\\s*detik\\b/);
  if (isMultiClip) {
    dynamicInjection += "\\n\\n--- MULTI-CLIP BLUEPRINTS ---\\n" + skills.videoorchestra + "\\n" + skills.charsheet + "\\n" + skills.envsheet + "\\n" + skills.propsheet;
  }

  // MODE-BASED CHARACTER LIMIT ENFORCEMENT
  const charLimit = mode === 'mini' ? 2000 : 3000;
  const modeName = mode === 'mini' ? 'MINI' : 'STANDARD';
  const modeEnforcement = \`
=================================
⚠️ ABSOLUTE CHARACTER LIMIT MANDATE (MODE: \${modeName}) ⚠️
The user has selected \${modeName} mode. The ENTIRE video prompt block (from [SYS-LOG] through [CAMERA & PHYSICS LOCK] and all 7 Pillars) MUST be UNDER \${charLimit} characters total per clip.
This is a HARD LIMIT. You MUST NOT exceed \${charLimit} characters for the prompt block under ANY circumstances.
DO NOT sacrifice quality or protocol compliance. Instead, you MUST use "Surgical Compression":
- Remove redundant filler words and adjectives. (e.g. use "Dirty OTS" instead of "Dirty over-shoulder looking down").
- Use abbreviations (e.g. "JP" instead of "Japanese", "N, S, E, W" instead of "North, South, East, West").
- Compress the 7 Pillars by stripping out conversational text (e.g., [COMPASS RULE]: Window N, futon C, door S).
- Combine physical properties cleanly (e.g., "Clean frame: zero vignette/borders").
- Target a length of ~1400-1600 characters to be safe.
After generating the prompt, count the characters and confirm the count in the audit table.
=================================\`;

  return \`You are THE DIRECTOR O.S. V19.1.

\${coreEngine}

\${dynamicInjection}

\${modeEnforcement}
USER RENDER ENGINE SELECTION: \${engine.toUpperCase()}
FORMAT YOUR RESPONSE AS FOLLOWS:
Do not converse. Output only the prompt blueprint.
Include a brief explanation block at the top, followed by the EXACT prompt block inside a markdown code block, followed by a V19.1 Compliance Audit table.
CRITICAL MULTI-CLIP RULE: If the output contains multiple clips (Phase 2 Video Orchestration), EVERY individual clip prompt MUST begin with its own [SYS-LOG: RNG INITIATIVE] block BEFORE [PROSE]. This is mandatory for both single-clip and multi-clip outputs. A clip without [SYS-LOG] is INVALID.
At the END of the audit table, add a row: "Character Count" with the exact character count of the prompt block and whether it passes the \${charLimit} char limit.
\`;
}
`;

fs.writeFileSync('src/system-prompt.js', jsOutput);
console.log('Dynamic system-prompt.js has been generated successfully!');
