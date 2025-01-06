import express from "express";
import UserController from "./user.controller";

const userRouter = express.Router();

userRouter.post("/", UserController.create);

export default userRouter;
