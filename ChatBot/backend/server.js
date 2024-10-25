const express = require('express');
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY
});

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/generate', async (req, res) => {
  const userPrompt = req.body.prompt;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a knowledgeable guide specializing in the history of Montenegro, including its old towns, monuments, local cuisine, and general knowledge about the country. Only provide information relevant to these topics." },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 100,
    });

    res.json({ text: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: 'Failed to generate text', details: error.message });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
