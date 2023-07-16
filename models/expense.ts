import { Model, ObjectId, Schema, model } from "mongoose";

export interface IExpense {
  description: string;
  amount: number;
  user: ObjectId;
}

const ExpenseSchema = new Schema<IExpense>(
  {
    description: {
      type: String,
      required: [true, "Description is required"],
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { versionKey: false }
);

const Expense: Model<IExpense> = model<IExpense>("Expense", ExpenseSchema);

export default Expense;
