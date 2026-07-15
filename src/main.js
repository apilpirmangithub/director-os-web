// src/main.js

import { loadSettings, saveSettings, loadSessions, saveSessions, createSession, updateSession, defaultSettings } from './session.js';
import { callGeminiAPI } from './gemini.js';
import { renderMessage, renderTypingIndicator, removeTypingIndicator } from './chat.js';
import { updateResultPanel, copyToClipboard, downloadMarkdown, downloadPDF } from './result.js';

// Global State
let settings = defaultSettings;
let sessions = [];
let currentSessionId = null;

// DOM Elements
const els = {
  // Settings Modal
  modal: document.getElementById('settings-modal'),
  btnSettings: document.getElementById('btn-settings'),
  btnCloseSettings: document.getElementById('btn-close-settings'),
  btnSaveSettings: document.getElementById('btn-save-settings'),
  apiKeyInput: document.getElementById('api-key-input'),
  btnToggleKey: document.getElementById('btn-toggle-key'),
  modelSelect: document.getElementById('model-select'),
  langBtns: document.querySelectorAll('[data-lang]'),
  engineBtns: document.querySelectorAll('[data-engine]'),
  
  // Sidebar
  btnNewSession: document.getElementById('btn-new-session'),
  sessionList: document.getElementById('session-list'),
  currentEngineIcon: document.getElementById('current-engine-icon'),
  currentEngineLabel: document.getElementById('current-engine-label'),
  
  // Chat
  chatInput: document.getElementById('chat-input'),
  btnSend: document.getElementById('btn-send'),
  chatMessages: document.getElementById('chat-messages'),
  btnClearChat: document.getElementById('btn-clear-chat'),
  
  // Results
  btnCopy: document.getElementById('btn-copy'),
  btnDownloadMd: document.getElementById('btn-download-md'),
  btnDownloadPdf: document.getElementById('btn-download-pdf'),
  
  // Quick Actions
  quickBtns: document.querySelectorAll('.quick-btn')
};

// Initialize
function init() {
  settings = loadSettings();
  sessions = loadSessions();
  
  // Apply settings
  els.apiKeyInput.value = settings.apiKey;
  els.modelSelect.value = settings.model;
  updateToggleUI(els.langBtns, settings.language, 'data-lang');
  updateToggleUI(els.engineBtns, settings.engine, 'data-engine');
  updateEngineIndicator();

  // Load last session or create new
  if (sessions.length > 0) {
    switchSession(sessions[0].id);
  } else {
    handleNewSession();
  }

  renderSessionList();
  bindEvents();
}

function bindEvents() {
  // Settings Modal
  els.btnSettings.addEventListener('click', () => els.modal.classList.remove('hidden'));
  els.btnCloseSettings.addEventListener('click', () => els.modal.classList.add('hidden'));
  els.btnToggleKey.addEventListener('click', () => {
    els.apiKeyInput.type = els.apiKeyInput.type === 'password' ? 'text' : 'password';
  });
  els.btnSaveSettings.addEventListener('click', handleSaveSettings);

  // Toggles
  els.langBtns.forEach(btn => btn.addEventListener('click', (e) => {
    updateToggleUI(els.langBtns, e.target.dataset.lang, 'data-lang');
  }));
  els.engineBtns.forEach(btn => btn.addEventListener('click', (e) => {
    updateToggleUI(els.engineBtns, e.target.dataset.engine, 'data-engine');
  }));

  // Sidebar
  els.btnNewSession.addEventListener('click', handleNewSession);
  
  // Chat Input
  els.chatInput.addEventListener('input', () => {
    els.btnSend.disabled = els.chatInput.value.trim().length === 0;
    // Auto resize
    els.chatInput.style.height = 'auto';
    els.chatInput.style.height = (els.chatInput.scrollHeight) + 'px';
  });
  
  els.chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  });
  
  els.btnSend.addEventListener('click', handleSendMessage);
  els.btnClearChat.addEventListener('click', handleClearChat);

  // Quick actions
  els.quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      els.chatInput.value = btn.dataset.prompt;
      els.btnSend.disabled = false;
      handleSendMessage();
    });
  });

  // Result actions
  els.btnCopy.addEventListener('click', copyToClipboard);
  els.btnDownloadMd.addEventListener('click', downloadMarkdown);
  els.btnDownloadPdf.addEventListener('click', downloadPDF);
}

// UI Helpers
function updateToggleUI(buttons, activeValue, dataAttr) {
  buttons.forEach(btn => {
    if (btn.getAttribute(dataAttr) === activeValue) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function updateEngineIndicator() {
  const icons = { 'live-action': '🎬', 'anime': '🎌', '3d-comic': '🕷️' };
  const labels = { 'live-action': 'Live-Action', 'anime': 'Anime', '3d-comic': '3D Comic' };
  els.currentEngineIcon.innerText = icons[settings.engine] || '🎬';
  els.currentEngineLabel.innerText = labels[settings.engine] || 'Live-Action';
}

// Actions
function handleSaveSettings() {
  const activeLang = document.querySelector('.toggle-btn[data-lang].active').dataset.lang;
  const activeEngine = document.querySelector('.toggle-btn[data-engine].active').dataset.engine;
  
  settings = {
    apiKey: els.apiKeyInput.value.trim(),
    language: activeLang,
    engine: activeEngine,
    model: els.modelSelect.value
  };
  
  saveSettings(settings);
  updateEngineIndicator();
  els.modal.classList.add('hidden');
}

function renderSessionList() {
  els.sessionList.innerHTML = sessions.map(s => `
    <div class="session-item ${s.id === currentSessionId ? 'active' : ''}" data-id="${s.id}">
      <span class="session-title">${s.title}</span>
      <button class="session-delete" title="Delete">✕</button>
    </div>
  `).join('');

  document.querySelectorAll('.session-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('session-delete')) {
        handleDeleteSession(item.dataset.id);
      } else {
        switchSession(item.dataset.id);
      }
    });
  });
}

function switchSession(id) {
  currentSessionId = id;
  const session = sessions.find(s => s.id === id);
  if (!session) return;
  
  renderSessionList();
  
  // Clear chat except welcome
  const msgs = Array.from(els.chatMessages.children);
  msgs.forEach(msg => {
    if (!msg.classList.contains('welcome-message')) msg.remove();
  });

  // Render history
  session.history.forEach(msg => {
    renderMessage(els.chatMessages, msg.role, msg.content);
    // If it's the last AI message, update result panel
    if (msg.role === 'ai') {
      updateResultPanel(msg.content);
    }
  });
}

function handleNewSession() {
  const newSess = createSession();
  sessions.unshift(newSess);
  saveSessions(sessions);
  switchSession(newSess.id);
}

function handleDeleteSession(id) {
  sessions = sessions.filter(s => s.id !== id);
  if (sessions.length === 0) {
    handleNewSession();
  } else if (currentSessionId === id) {
    switchSession(sessions[0].id);
  } else {
    renderSessionList();
  }
  saveSessions(sessions);
}

function handleClearChat() {
  const session = sessions.find(s => s.id === currentSessionId);
  if (session) {
    session.history = [];
    updateSession(sessions, currentSessionId, session.history);
    switchSession(currentSessionId);
  }
}

async function handleSendMessage() {
  const text = els.chatInput.value.trim();
  if (!text) return;
  if (!settings.apiKey) {
    alert("Please enter your Gemini API Key in Settings first.");
    els.modal.classList.remove('hidden');
    return;
  }

  // Update UI
  els.chatInput.value = '';
  els.chatInput.style.height = 'auto';
  els.btnSend.disabled = true;
  renderMessage(els.chatMessages, 'user', text);
  
  // Update Session
  const session = sessions.find(s => s.id === currentSessionId);
  session.history.push({ role: 'user', content: text });
  updateSession(sessions, currentSessionId, session.history);
  renderSessionList();

  // Show typing
  renderTypingIndicator(els.chatMessages);

  try {
    const aiResponse = await callGeminiAPI(settings.apiKey, settings.model, settings.engine, session.history.slice(0, -1), text);
    removeTypingIndicator();
    
    // Render AI message in chat
    renderMessage(els.chatMessages, 'ai', aiResponse);
    
    // Update Result Panel
    updateResultPanel(aiResponse);

    // Save to session
    session.history.push({ role: 'ai', content: aiResponse });
    updateSession(sessions, currentSessionId, session.history);

  } catch (error) {
    removeTypingIndicator();
    renderMessage(els.chatMessages, 'ai', `**Error:** ${error.message}`);
  }
}

// Start
init();
