// src/grok.js
import { getSystemPrompt } from './system-prompt.js';

export async function callGrokAPI(apiKey, model, engine, history, userMessage) {
  if (!apiKey) throw new Error("API Key is missing. Please set it in Settings.");

  const endpoint = 'https://api.x.ai/v1/responses';

  // Build input array with system + history + new message
  const input = [];

  // System prompt
  input.push({
    role: 'system',
    content: getSystemPrompt(engine, userMessage)
  });

  // Format history
  history.forEach(msg => {
    input.push({
      role: msg.role === 'ai' ? 'assistant' : 'user',
      content: msg.content
    });
  });

  // Add the new user message
  input.push({
    role: 'user',
    content: userMessage
  });

  const payload = {
    model: model,
    input: input,
    temperature: 0.4,
    max_output_tokens: 2048
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Failed to communicate with Grok API");
  }

  const data = await response.json();

  if (data.output && data.output.length > 0) {
    // Find the message output
    const msgOutput = data.output.find(o => o.type === 'message');
    if (msgOutput && msgOutput.content && msgOutput.content.length > 0) {
      return msgOutput.content[0].text;
    }
  }

  throw new Error("No response generated from Grok.");
}
