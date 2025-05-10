const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai'); // Use OpenAI directly instead of Configuration
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    const botMessage = completion.choices[0].message.content;
    res.json({ botMessage });
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    res.status(500).json({ botMessage: 'Sorry, something went wrong.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
