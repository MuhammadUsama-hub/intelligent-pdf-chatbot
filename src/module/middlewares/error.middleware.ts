import { Request, Response, NextFunction } from "express";
import errorHandler from "errorhandler";
import notifier from "node-notifier";

function errorNotification(_err: any, str: string, req: Request) {
  const title = `Error in ${req.method} ${req.url}`;

  // Send a desktop notification
  notifier.notify({
    title,
    message: str,
  });
}

const errorMiddleware = (app: any) => {
  if (process.env.NODE_ENV === "dev") {
    // Only use in development
    app.use(errorHandler({ log: errorNotification }));
  } else {
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      console.error(err);
      res.status(500).json({ message: "Something went wrong!" });
    });
  }
};

export default errorMiddleware;
