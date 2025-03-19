import { Request, Response } from "express";
import FileServices from "./file.service";

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
  const result = await FileServices.fetch(req.body.query);
  if (!result) {
    res.status(404).json({ message: "not found" });
    return;
  }
  res.status(200).json({ data: result });
};

const FileController = {
  create,
  fetch,
};
export default FileController;
