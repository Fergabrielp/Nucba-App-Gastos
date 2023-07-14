import express, { Express } from "express";
import { connectDB } from "../db/config";

export class Server {
  app: Express;
  port: number | string | undefined;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectToDB();
    this.middlewares();
  }

  async connectToDB(): Promise<void> {
    await connectDB();
  }

  middlewares(): void {
    this.app.use(express.json);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Running on port ${this.port}`);
    });
  }
}
