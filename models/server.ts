import express, { Express } from "express";
import { connectDB } from "../db/config";
import authRoute from "../routes/auth";
import userRoute from "../routes/user";

export class Server {
  app: Express;
  port: number | string | undefined;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectToDB();
    this.middlewares();
    this.routes();
  }

  async connectToDB(): Promise<void> {
    await connectDB();
  }

  middlewares(): void {
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/auth", authRoute);
    this.app.use("/", userRoute);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Running on port ${this.port}`);
    });
  }
}
