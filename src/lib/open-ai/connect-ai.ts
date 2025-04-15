import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
  project: process.env.OPENAI_PROJECT_ID || "",
});

export default async function main(question: string, knowledge: string) {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `you are a knowledge base assistant, you can answer any question based on the knowledge base.this is your knowledge base:  ${knowledge}`,
      },
      { role: "user", content: question },
    ],
    model: "gpt-4o",
  });
  return chatCompletion.choices[0].message.content;
}
