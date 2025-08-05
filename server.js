import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post('/generate-quote', async (req, res) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'You are a quote generator.' },
                { role: 'user', content: 'Give me one short, original motivational quote.' }
            ]
        });

        const quote = chatCompletion.choices[0].message.content.trim();
        res.json({ quote });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate quote' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
