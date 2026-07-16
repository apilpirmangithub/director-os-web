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
  const isGrok = model.startsWith('grok');
  const apiKey = isGrok ? process.env.GROK_API_KEY : process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: `API Key for ${isGrok ? 'Grok' : 'Gemini'} is not configured in Vercel ENV.` });
  }

  try {
    let resultText = '';

    if (isGrok) {
      const endpoint = 'https://api.x.ai/v1/responses';
      const input = [];
      input.push({
        role: 'system',
        content: getSystemPrompt(engine, userMessage, mode)
      });
      history.forEach(msg => {
        input.push({
          role: msg.role === 'ai' ? 'assistant' : 'user',
          content: msg.content
        });
      });
      input.push({
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
          input: input,
          temperature: 0.4,
          max_output_tokens: 32768
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to communicate with Grok API");
      }
      const data = await response.json();
      const msgOutput = data.output?.find(o => o.type === 'message');
      if (msgOutput?.content?.length > 0) {
        resultText = msgOutput.content[0].text;
      } else {
        throw new Error("No response generated from Grok.");
      }
    } else {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const contents = history.map(msg => ({
        role: msg.role === 'ai' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: getSystemPrompt(engine, userMessage, mode) }] },
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 32768,
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to communicate with Gemini API");
      }
      const data = await response.json();
      if (data.candidates && data.candidates.length > 0) {
        resultText = data.candidates[0].content.parts[0].text;
      } else {
        throw new Error("No response generated from Gemini.");
      }
    }

    res.status(200).json({ text: resultText });
  } catch (error) {
    console.error("API Route Error:", error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
