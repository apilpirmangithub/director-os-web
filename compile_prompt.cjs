const fs = require('fs');
const path = require('path');

const configDir = 'C:\\Users\\apilp\\.gemini\\config';

const filesToCompile = [
  path.join(configDir, 'AGENTS.md'),
  path.join(configDir, 'director_os_master_workflow.txt'),
  path.join(configDir, 'skills', '00_MASTER_OS.md'),
  path.join(configDir, 'skills', 'audioskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'storyskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'cinemaskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'promptskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'videoorchestra', 'SKILL.md'),
  path.join(configDir, 'skills', 'writerskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'fashionskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'indoskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'japanskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'ugcskill', 'SKILL.md'),
  path.join(configDir, 'skills', 'charsheet', 'SKILL.md'),
  path.join(configDir, 'skills', 'envsheet', 'SKILL.md'),
  path.join(configDir, 'skills', 'propsheet', 'SKILL.md')
];

let massivePrompt = "You are THE DIRECTOR O.S. V16.4. You have access to the following full documentation:\\n\\n";

for (const file of filesToCompile) {
  try {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf-8');
      const filename = path.basename(file);
      const folderName = path.basename(path.dirname(file));
      massivePrompt += `\n\n--- START OF DOCUMENT: ${folderName}/${filename} ---\n`;
      massivePrompt += content.replace(/`/g, '\\`').replace(/\$/g, '\\$'); // Escape backticks and dollars
      massivePrompt += `\n--- END OF DOCUMENT ---\n`;
    } else {
      console.warn(`Warning: File not found ${file}`);
    }
  } catch (e) {
    console.error(`Error reading ${file}`, e);
  }
}

massivePrompt += `

=================================
USER RENDER ENGINE SELECTION: \${engine.toUpperCase()}
FORMAT YOUR RESPONSE AS FOLLOWS:
Do not converse. Output only the prompt blueprint.
Include a brief explanation block at the top, followed by the EXACT prompt block inside a markdown code block, followed by a V16.4 Compliance Audit table.
`;

const jsOutput = `// src/system-prompt.js
// AUTO-GENERATED: MASSIVE UNCOMPRESSED PROMPT

export function getSystemPrompt(engine) {
  return \`
${massivePrompt}
\`;
}
`;

fs.writeFileSync('src/system-prompt.js', jsOutput);
console.log('Uncompressed system-prompt.js has been generated successfully!');
console.log(`Estimated characters: ${massivePrompt.length}`);
