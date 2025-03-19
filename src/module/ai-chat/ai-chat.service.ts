import main from "@/lib/open-ai/connect-ai";
import e from "express";
import { pc } from "server";

const model = "multilingual-e5-large";

// const create = async (question: string) => {
//   const answer = await main(question);
// };

const fetch = async (query: string[]) => {
  const embeddingQuery = await pc.inference.embed(model, query, {
    inputType: "query",
  });

  const queryResponse = await pc.index("documents").query({
    topK: 3,
    vector: embeddingQuery[0].values!,
    includeValues: false,
    includeMetadata: true,
  });

  console.log(queryResponse);
};

const AiChatServices = {
  fetch,
};
export default AiChatServices;
