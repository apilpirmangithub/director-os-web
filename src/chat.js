// src/chat.js

export function renderMessage(container, role, content) {
  const isUser = role === 'user';
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
  
  // Clean up content for display (if AI returned markdown, basic formatting)
  let displayContent = content;
  if (!isUser) {
    // If the AI returned a prompt block, we only want to show the conversational part in the chat
    // The prompt block will go to the result panel.
    const promptMatch = content.match(/```([\s\S]*?)```/);
    if (promptMatch) {
      displayContent = content.replace(promptMatch[0], '*(Prompt generated in right panel)*');
    }
  }

  // Basic markdown bold
  displayContent = displayContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Handle newlines
  const paragraphs = displayContent.split('\n').filter(p => p.trim() !== '');
  const paragraphsHtml = paragraphs.map(p => `<p>${p}</p>`).join('');

  messageDiv.innerHTML = `
    <div class="message-avatar">${isUser ? '👤' : '🎬'}</div>
    <div class="message-content">
      <div class="message-bubble ${isUser ? '' : 'glass-bubble'}">
        ${paragraphsHtml}
      </div>
    </div>
  `;
  
  container.appendChild(messageDiv);
  container.scrollTop = container.scrollHeight;
}

export function renderTypingIndicator(container) {
  const indicator = document.createElement('div');
  indicator.className = 'message ai-message typing-indicator-container';
  indicator.id = 'typing-indicator';
  indicator.innerHTML = `
    <div class="message-avatar">🎬</div>
    <div class="message-content">
      <div class="message-bubble glass-bubble">
        <div class="typing-indicator">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  `;
  container.appendChild(indicator);
  container.scrollTop = container.scrollHeight;
}

export function removeTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) indicator.remove();
}
