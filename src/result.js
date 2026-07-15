// src/result.js

export function updateResultPanel(aiResponse) {
  const resultContainer = document.getElementById('result-content');
  const auditPanel = document.getElementById('audit-panel');
  const auditTable = document.getElementById('audit-table');
  
  // Enable buttons
  document.getElementById('btn-copy').disabled = false;
  document.getElementById('btn-download-md').disabled = false;
  document.getElementById('btn-download-pdf').disabled = false;

  // Extract Prompt Block
  const promptMatch = aiResponse.match(/```(?:text)?\n([\s\S]*?)```/);
  const promptText = promptMatch ? promptMatch[1].trim() : "No prompt detected in the output.";

  // Render Result Block
  resultContainer.innerHTML = `
    <div class="result-block">
      <div class="result-block-header">
        Compiled Prompt
      </div>
      <div class="result-block-body">
        <div class="result-prompt-text" id="raw-prompt-text">${promptText}</div>
      </div>
    </div>
  `;

  // Perform basic audit check by scanning the aiResponse text for keywords
  const textLower = aiResponse.toLowerCase();
  
  const rules = [
    { name: "3-Second Mandate", pass: textLower.includes("3 second") || textLower.includes("cut") || textLower.includes("dynamic") },
    { name: "Triadic Color Law", pass: textLower.includes("color") || textLower.includes("triadic") },
    { name: "Anti-Slop Protocol", pass: !textLower.includes("masterpiece") && !textLower.includes("ultra realistic") },
    { name: "Dermatological Law", pass: textLower.includes("skin") || textLower.includes("pores") || textLower.includes("sweat") || textLower.includes("texture") }
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
  const text = document.getElementById('raw-prompt-text')?.innerText;
  if (!text) return;
  
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('btn-copy');
    const original = btn.innerText;
    btn.innerText = '✅ Copied!';
    setTimeout(() => { btn.innerText = original; }, 2000);
  });
}

export function downloadMarkdown() {
  const text = document.getElementById('raw-prompt-text')?.innerText;
  if (!text) return;

  const blob = new Blob([text], { type: 'text/markdown' });
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
