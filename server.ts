import dotenv from "dotenv";
import http from "http";

dotenv.config();

import app from "@/app";
import { Pinecone } from "@pinecone-database/pinecone";

export const pc = new Pinecone({
  apiKey: process.env.DATABASE_API_KEY!,
});

export const indexName = "documents";

//PC index creation
(async () => {
  const existingIndexes = await pc.listIndexes();

  if (
    !existingIndexes.indexes?.map((index) => index.name).includes(indexName)
  ) {
    await pc.createIndex({
      name: indexName,
      dimension: 1024,
      metric: "cosine",
      spec: {
        serverless: {
          cloud: "aws",
          region: "us-east-1",
        },
      },
      deletionProtection: "disabled",
      tags: { environment: "development" },
    });
    console.log(`Index ${indexName} created.`);
  } else {
    console.log(`Index ${indexName} already exists.`);
  }
})();

export const index = pc.index(indexName);
export const model = "multilingual-e5-large";
const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
