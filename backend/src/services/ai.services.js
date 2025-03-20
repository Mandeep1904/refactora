import dotenv from "dotenv";

dotenv.config()

import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const generateResponse = async (prompt) => {
  const chatCompletion = await groq.chat.completions.create({
    model: "deepseek-r1-distill-qwen-32b",
    messages: [
      {
        role: "user",
        content: prompt,
      },
      {
        role: "system",
        content:
          `
        So, think of yourself as an enthusiastic programming coder, and your job here is to understand what the user's prompt is and 
        based on that, give the corrections in the code if needed and make necessary changes and provide feedbacks
        `,
      },
    ],
  });

  return chatCompletion.choices[0].message.content;
}

export default generateResponse;
