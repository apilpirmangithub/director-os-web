import { getSystemPrompt } from '../src/system-prompt.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { model, engine, history, userMessage, mode = 'mini' } = req.body;

  if (!model || !engine || !userMessage) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Determine provider based on model
  const apiKey = process.env.GROK_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: `API Key for Grok is not configured in Vercel ENV.` });
  }

  try {
    let resultText = '';

    const endpoint = 'https://api.x.ai/v1/chat/completions';
    const messages = [];
    messages.push({
      role: 'system',
      content: getSystemPrompt(engine, userMessage, mode)
    });
    history.forEach(msg => {
      messages.push({
        role: msg.role === 'ai' ? 'assistant' : 'user',
        content: msg.content
      });
    });
    messages.push({
      role: 'user',
      content: userMessage
    });

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: 0.4
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMsg = `API Error ${response.status}`;
      try {
        const errorData = JSON.parse(errorText);
        errorMsg = errorData.error?.message || errorData.error || errorMsg;
      } catch (e) {
        errorMsg = `${errorMsg}: ${errorText.substring(0, 150)}`;
      }
      throw new Error(errorMsg);
    }
    
    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      resultText = data.choices[0].message.content;
    } else {
      throw new Error("No response generated from Grok.");
    }

    res.status(200).json({ text: resultText });
  } catch (error) {
    console.error("API Route Error:", error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
