import express from "express";
import FileController from "./file.controller";

const fileRouter = express.Router();

fileRouter.post("/", FileController.create);
fileRouter.get("/", FileController.fetch);

export default fileRouter;
