import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
  project: process.env.OPENAI_PROJECT_ID || "",
});

export default async function main(question: string) {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      { role: "user", content: question },
    ],
    model: "gpt-3.5-turbo",
  });
  return chatCompletion;
}
