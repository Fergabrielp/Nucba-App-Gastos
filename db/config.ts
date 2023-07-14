import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      `mongodb+srv://perezfernando95:${process.env.DB_KEY}@nucbaappgastos.atya82z.mongodb.net/`
    );
    console.log("Database connected");
  } catch (error) {
    throw new Error(`Error trying to connect to Database: ${error}`);
  }
};
