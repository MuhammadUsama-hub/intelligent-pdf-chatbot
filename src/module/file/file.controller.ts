import { Request, Response } from "express";
import FileServices from "./file.service";

const create = async (req: Request, res: Response) => {
  if (req.file) {
    const pdfText = await FileServices.create(req.file);
    res.status(201).json({ data: pdfText });
    return;
  }
  res.status(400).json({ error: "File not uploaded" });
};

const FileController = {
  create,
};
export default FileController;
