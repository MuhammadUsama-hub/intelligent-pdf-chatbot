import express from "express";
import errorMiddleware from "@/module/middlewares/error.middleware";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./module/users/user.router";
import multer from "multer";
import fileRouter from "./module/file/file.router";

const upload = multer({ dest: "/tmp" });

const app = express();

// cors middleware
app.use((req, res, next) => {
  cors({ credentials: true, origin: req.headers["origin"]?.toLowerCase() })(
    req,
    res,
    next
  );
});

// body parser
app.use(express.json());

// file upload
app.use(upload.single("file"));

// request logger
app.use(morgan("short"));

//routes

app.use("/files", fileRouter);
app.use("/users", userRouter);

//global error handler
errorMiddleware(app);

export default app;
