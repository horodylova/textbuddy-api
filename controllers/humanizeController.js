import axios from "axios";
import { createHumanizePrompt } from "../utils/humanize.js";
import { rateLimiter } from "../utils/rateLimiter.js";

export const humanizeText = async (req, res) => {
  const { input } = req.body;

  if (!input || typeof input !== 'string') {
    return res.status(400).json({ 
      error: "Input text is required and must be a string" 
    });
  }

  try {
   
    await rateLimiter.checkLimits();

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: createHumanizePrompt()
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

    const tokens = response.data.usage.total_tokens;
    
  
    await rateLimiter.logRequest(tokens);

    const output = response.data.choices[0].message.content;
    
    return res.status(200).json({ 
      transformedText: output,
      original: input,
      usage: {
        tokens,
        limits: rateLimiter.getStatus()
      }
    });

  } catch (error) {
    if (error.message?.includes('Rate limit')) {
      return res.status(429).json({ 
        error: error.message,
        limits: rateLimiter.getStatus()
      });
    }

    console.error("Error:", error.response?.data || error.message);
    return res.status(error.response?.status || 500).json({ 
      error: error.response?.data?.error?.message || "Failed to process the request" 
    });
  }
};


export const getLimitsStatus = (req, res) => {
  res.json(rateLimiter.getStatus());
};