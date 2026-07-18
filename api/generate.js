import { getSystemPrompt } from '../src/system-prompt.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { model, engine, history = [], userMessage, mode = 'mini' } = req.body;

  if (!model || !engine || !userMessage) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROK_API_KEY is not configured in Vercel ENV.' });
  }

  try {
    const endpoint = 'https://api.x.ai/v1/responses';
    const input = [{ role: 'system', content: getSystemPrompt(engine, userMessage, mode) }];
    history.forEach(msg => {
      input.push({ role: msg.role === 'ai' ? 'assistant' : 'user', content: msg.content });
    });
    input.push({ role: 'user', content: userMessage });

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
      const errText = await response.text();
      let errMsg = 'Failed to communicate with Grok API';
      try {
        const errData = JSON.parse(errText);
        errMsg = errData.error?.message || errMsg;
      } catch (e) {
        errMsg = `Grok API Error: ${response.status} ${response.statusText}`;
      }
      throw new Error(errMsg);
    }

    const data = await response.json();
    const msgOutput = data.output?.find(o => o.type === 'message');
    if (msgOutput?.content?.length > 0) {
      res.status(200).json({ text: msgOutput.content[0].text });
    } else {
      throw new Error('No response generated from Grok.');
    }
  } catch (error) {
    console.error('API Route Error:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
