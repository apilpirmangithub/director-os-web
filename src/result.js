// src/result.js

export function updateResultPanel(aiResponse) {
  const resultContainer = document.getElementById('result-content');
  const auditPanel = document.getElementById('audit-panel');
  const auditTable = document.getElementById('audit-table');
  
  // Enable buttons
  document.getElementById('btn-copy').disabled = false;
  document.getElementById('btn-download-md').disabled = false;
  document.getElementById('btn-download-pdf').disabled = false;

  // Detect if this is a Director O.S. production output
  const isProduction = /\[PROSE\]|\[GLOBAL LOCK\]|\[RENDER & ACTING LOCK\]|\[CAMERA & PHYSICS LOCK\]|PHASE [012]|CharSheet|EnvSheet|PropSheet/i.test(aiResponse);

  let promptText = '';

  if (isProduction) {
    // For production output, use the FULL response as the result
    // But strip any brief conversational preamble before the first production marker
    const firstMarker = aiResponse.search(/(?:#{1,3}\s|PHASE\s[012]|\*{3}\s*\n|\[PROSE\]|BRIEF EXPLANATION|implementation_plan|Total Runtime)/i);
    
    if (firstMarker > 0) {
      promptText = aiResponse.substring(firstMarker).trim();
    } else {
      promptText = aiResponse.trim();
    }
  } else {
    // Legacy: extract from code blocks
    const promptMatch = aiResponse.match(/```(?:text|markdown)?\n([\s\S]*?)```/);
    promptText = promptMatch ? promptMatch[1].trim() : aiResponse.trim();
  }

  // Convert markdown to basic HTML for display
  let displayHtml = promptText
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Horizontal rules (*** or ---)
    .replace(/^\*{3,}$/gm, '<hr>')
    .replace(/^-{3,}$/gm, '<hr>')
    // Code blocks
    .replace(/```(?:text|markdown)?\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Inline code
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Line breaks
    .replace(/\n/g, '<br>');

  // Render Result Block
  resultContainer.innerHTML = `
    <div class="result-block">
      <div class="result-block-header">
        🎬 Director O.S. V16.4 — Compiled Production
      </div>
      <div class="result-block-body">
        <div class="result-prompt-text" id="raw-prompt-text" data-raw="${encodeURIComponent(promptText)}">${displayHtml}</div>
      </div>
    </div>
  `;

  // Perform V16.4 compliance audit
  const textLower = aiResponse.toLowerCase();
  
  const rules = [
    { name: "Action-First Inversion", pass: /\[prose\]/.test(textLower) },
    { name: "3-Second Mandate", pass: /hard.?cut|jump.?cut/i.test(textLower) },
    { name: "7 Pillars Continuity", pass: /\[gaze direction\]/i.test(textLower) && /\[proximity lock\]/i.test(textLower) },
    { name: "Triadic Color Law", pass: /color|triadic|green|red|cyan|orange/i.test(textLower) },
    { name: "Anti-Slop Protocol", pass: !/masterpiece|ultra realistic|best quality/i.test(textLower) },
    { name: "Dermatological Law", pass: /skin|pores|sweat|texture|epidermis|capillary/i.test(textLower) },
    { name: "Full Wardrobe Lock", pass: /wardrobe|barefoot|shoes|heels|pants|shorts|blouse|shirt/i.test(textLower) },
    { name: "Anti-Slowmo Law", pass: /1\.0x|no slow|real.?time/i.test(textLower) },
    { name: "Clean Frame Protocol", pass: /clean frame|borderless|zero black bars|no letterboxing/i.test(textLower) },
    { name: "Premium Aesthetic", pass: !/dull|boring|ugly|basic/i.test(textLower) && /cinematic|beautiful|striking|high-end|luxury|aesthetic/i.test(textLower) }
  ];

  auditTable.innerHTML = rules.map(rule => `
    <div class="audit-row ${rule.pass ? 'pass' : 'fail'}">
      <span>${rule.pass ? '✅' : '❌'}</span>
      <span>${rule.name}</span>
    </div>
  `).join('');

  auditPanel.classList.remove('hidden');
}

export function copyToClipboard() {
  const el = document.getElementById('raw-prompt-text');
  if (!el) return;
  
  // Use the raw text data attribute for clean copy
  const rawText = el.dataset.raw ? decodeURIComponent(el.dataset.raw) : el.innerText;
  
  navigator.clipboard.writeText(rawText).then(() => {
    const btn = document.getElementById('btn-copy');
    const original = btn.innerText;
    btn.innerText = '✅ Copied!';
    setTimeout(() => { btn.innerText = original; }, 2000);
  });
}

export function downloadMarkdown() {
  const el = document.getElementById('raw-prompt-text');
  if (!el) return;

  const rawText = el.dataset.raw ? decodeURIComponent(el.dataset.raw) : el.innerText;

  const blob = new Blob([rawText], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `director_os_prompt_${Date.now()}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadPDF() {
  alert("PDF Export relies on external libraries like html2pdf.js. For this vanilla version, please use 'Print to PDF' from your browser.");
  window.print();
}
