import express, { Express } from "express";
import { connectDB } from "../db/config";
import userRoute from "../routes/user";
import userExpense from "../routes/expense";

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
    this.app.use("/user", userRoute);
    this.app.use("/expense", userExpense);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Running on port ${this.port}`);
    });
  }
}
