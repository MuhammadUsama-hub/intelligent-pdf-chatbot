import express from "express";
import FileController from "./file.controller";

const fileRouter = express.Router();

fileRouter.post("/", FileController.create);

export default fileRouter;
