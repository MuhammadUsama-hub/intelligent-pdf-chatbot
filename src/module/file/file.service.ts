import fs from "fs/promises";
import PdfParse from "@cyber2024/pdf-parse-fixed";
import { index, indexName, model, pc } from "server";
import { chunkText } from "./file.helper";
import { Data, Vectors } from "./file.types";

const create = async (file: Express.Multer.File) => {
  const filePath = file.path;
  const dataBuffer = await fs.readFile(filePath);
  const pdfText = (await PdfParse(dataBuffer)).text;

  const pdfChunks = chunkText(pdfText);
  const data: Data[] = pdfChunks.map((text, index) => ({
    id: `vec${index}`,
    text: text.trim(),
  }));

  const embeddings = await pc.inference.embed(
    model,
    data.map((d) => d.text),
    { inputType: "passage", truncate: "END" }
  );

  const vectors: Vectors[] = data.map((d, i) => ({
    id: d.id,
    values: embeddings[i].values!,
    metadata: { text: d.text },
  }));

  await index.namespace(indexName).upsert(vectors);

  await fs.unlink(filePath);
  return {
    message: "File processed and vectors upserted successfully",
    vectorsCount: vectors.length,
  };
};

const fetch = async (query: string[]) => {
  const embeddingQuery = await pc.inference.embed(model, query, {
    inputType: "query",
  });

  const queryResponse = await index.namespace(indexName).query({
    topK: 2,
    vector: embeddingQuery[0].values!,
    includeValues: false,
    includeMetadata: true,
  });

  return queryResponse;
};
const FileServices = {
  create,
  fetch,
};

export default FileServices;
