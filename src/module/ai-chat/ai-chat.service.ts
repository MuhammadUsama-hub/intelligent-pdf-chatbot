import main from "@/lib/open-ai/connect-ai";

const create = async (question: string) => {
  const answer = await main(question);
};
