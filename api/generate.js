import { getSystemPrompt } from '../src/system-prompt.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { model, engine, history, userMessage, mode = 'mini' } = req.body;

  if (!model || !engine || !userMessage) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // We exclusively use Grok models via x.ai API
  const apiKey = process.env.GROK_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: `API Key for Grok is not configured in Vercel ENV.` });
  }

  try {
    let resultText = '';

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

    res.status(200).json({ text: resultText });
  } catch (error) {
    console.error("API Route Error:", error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
