import express from "express";
import FileController from "./file.controller";

const fileRouter = express.Router();

fileRouter.post("/upload", FileController.create);
fileRouter.post("/chat", FileController.createChat);

export default fileRouter;
