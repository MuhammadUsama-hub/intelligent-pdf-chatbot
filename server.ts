import dotenv from "dotenv";
import http from "http";
import mongoose from "mongoose";

dotenv.config();

import app from "@/app";

const server = http.createServer(app);
const PORT = process.env.PORT;

(async () => {
  mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready");
  });

  mongoose.connection.on("error", (err: any) => {
    console.error(err);
  });

  await mongoose.connect(process.env.MONGO_URL!);

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
  });
})();
