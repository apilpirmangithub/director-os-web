import { getSystemPrompt } from '../src/system-prompt.js';

export const maxDuration = 60; // Set max execution time to 60 seconds

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { model, engine, history = [], userMessage, mode = 'mini' } = req.body;

  if (!model || !engine || !userMessage) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const isOpenAI = model.startsWith('gpt-');
  const isGrok = model.startsWith('grok-');

  try {
    let resultText = '';
    const systemPrompt = getSystemPrompt(engine, userMessage, mode);

    if (isOpenAI) {
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) return res.status(500).json({ error: "OPENAI_API_KEY is not configured in Vercel ENV." });
      
      const endpoint = 'https://api.openai.com/v1/chat/completions';
      const messages = [{ role: 'system', content: systemPrompt }];
      history.forEach(msg => {
        messages.push({ role: msg.role === 'ai' ? 'assistant' : 'user', content: msg.content });
      });
      messages.push({ role: 'user', content: userMessage });

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
        const errText = await response.text();
        let errMsg = "Failed to communicate with OpenAI API";
        try {
          const errData = JSON.parse(errText);
          errMsg = errData.error?.message || errMsg;
        } catch (e) {
          errMsg = `OpenAI API Error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errMsg);
      }
      
      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        resultText = data.choices[0].message.content;
      } else {
        throw new Error("No response generated from OpenAI.");
      }

    } else if (isGrok) {
      const apiKey = process.env.GROK_API_KEY;
      if (!apiKey) return res.status(500).json({ error: "GROK_API_KEY is not configured in Vercel ENV." });

      const endpoint = 'https://api.x.ai/v1/responses';
      const input = [{ role: 'system', content: systemPrompt }];
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
        let errMsg = "Failed to communicate with Grok API";
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
        resultText = msgOutput.content[0].text;
      } else {
        throw new Error("No response generated from Grok.");
      }
    } else {
      return res.status(400).json({ error: "Unsupported model selected." });
    }

    res.status(200).json({ text: resultText });
  } catch (error) {
    console.error("API Route Error:", error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
