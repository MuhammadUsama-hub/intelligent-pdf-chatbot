import { Request, Response } from "express";
import FileServices from "./file.service";
import main from "@/lib/open-ai/connect-ai";
import removeMd from "remove-markdown";

const create = async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ message: "No file uploaded" });
    return;
  }
  const result = await FileServices.create(req.file);
  if (!result) {
    res.status(500).json({ message: "Error processing file" });
    return;
  }
  res.status(200).json({ data: result });
};

const fetch = async (req: Request, res: Response) => {
  let { query } = req.body;
  const result = await FileServices.fetch(query);

  if (!result) {
    res.status(404).json({ message: "not found" });
    return;
  }

  const knowledge = result.matches
    .map((match) => match.metadata?.text)
    .join(" ");
  query = query.join(" ");
  const aiAnswer = await main(query, knowledge);
  const cleanedAnswer = removeMd(aiAnswer!);

  res.status(200).json({ data: cleanedAnswer });
};

const FileController = {
  create,
  fetch,
};
export default FileController;
