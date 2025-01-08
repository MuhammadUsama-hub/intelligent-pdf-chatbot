import fs from "fs/promises";
import PdfParse from "@cyber2024/pdf-parse-fixed";
import { Document, VectorStoreIndex } from "llamaindex";

const create = async (file: Express.Multer.File) => {
  const filePath = file.path;
  const dataBuffer = await fs.readFile(filePath);
  const pdfData = await PdfParse(dataBuffer);

  const document = new Document({ text: pdfData.text });
  const index = await VectorStoreIndex.fromDocuments([document]);

  await fs.unlink(filePath);
  return index;
};

const FileServices = {
  create,
};

export default FileServices;
