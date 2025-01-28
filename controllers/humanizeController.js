import axios from "axios";
import { humanize } from "../utils/humanize";



const humanizeController = async (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "Input text is required" });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: humanize(input)
          },
          {
            role: "user",
            content: input
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const output = response.data.choices[0].message.content;

    return res.status(200).json({ transformedText: output });
  } catch (error) {
    console.error("Error with OpenAI API:", error.message);
    return res.status(500).json({ error: "Failed to process the request" });
  }
};

 
  export default humanizeController;