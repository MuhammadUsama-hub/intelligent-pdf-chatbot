import express, { json, urlencoded } from "express";
import errorMiddleware from "@/module/middlewares/error.middleware";
import morgan from "morgan";
import conversationRouter from "#/conversation/conversation.router";
import userRouter from "./module/users/user.router";
import topicRouter from "./module/topic/topic.router";

const app = express();

// req data parsers
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

// request logger
app.use(morgan("short"));

//routes
app.use("/conversations", conversationRouter);
app.use("/users", userRouter);
app.use("/topics", topicRouter);

//global error handler
errorMiddleware(app);

export default app;
