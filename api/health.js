export default async function handler(req, res) {
  res.status(200).json({ 
    status: "ok",
    hasOpenAI: !!process.env.OPENAI_API_KEY,
    hasGrok: !!process.env.GROK_API_KEY,
    nodeVersion: process.version
  });
}
