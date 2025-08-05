const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}));

app.post("/generate-quote", async (req, res) => {
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-4", // or "gpt-3.5-turbo" if you're on a budget
            messages: [
                { role: "system", content: "You are a quote generator." },
                { role: "user", content: "Give me one short, original motivational quote." }
            ],
        });

        const quote = completion.data.choices[0].message.content.trim();
        res.json({ quote });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to generate quote" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
