// src/gemini.js
import { getSystemPrompt } from './system-prompt.js';

export async function callGeminiAPI(apiKey, model, engine, history, userMessage) {
  if (!apiKey) throw new Error("API Key is missing. Please set it in Settings.");

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  // Format history for Gemini
  const contents = history.map(msg => ({
    role: msg.role === 'ai' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  // Add the new user message
  contents.push({
    role: 'user',
    parts: [{ text: userMessage }]
  });

  const systemInstruction = {
    parts: [{ text: getSystemPrompt(engine, userMessage) }]
  };

  const payload = {
    contents,
    systemInstruction,
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 2048,
    }
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Failed to communicate with Gemini API");
  }

  const data = await response.json();
  
  if (data.candidates && data.candidates.length > 0) {
    return data.candidates[0].content.parts[0].text;
  }
  
  throw new Error("No response generated.");
}
