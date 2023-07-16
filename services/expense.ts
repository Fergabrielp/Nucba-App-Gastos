import Expense, { IExpense } from "../models/expense";
import User, { IUser } from "../models/user";

export const createOneExpense = async (id: string, expense: IExpense) => {
  const userFound = await User.findById(id);
  if (userFound) {
    const newExpense = await Expense.create({ ...expense, user: id });
    return newExpense;
  } else {
    throw new Error("Expense not found");
  }
};

export const getAllExpenses = async () => {
  const expenses = await Expense.find({}).populate("user", "name");
  return expenses;
};

export const getOneExpense = async (id: string) => {
  const expenseFound = await Expense.findOne({ _id: id }).populate(
    "user",
    "name"
  );
  return expenseFound;
};

export const updateOneExpense = async (id: string, dataToUpdate: IExpense) => {
  const expenseUpdated = await Expense.findOneAndUpdate(
    { _id: id },
    dataToUpdate,
    {
      new: true,
    }
  );
  return expenseUpdated;
};

export const deleteOneExpense = async (id: string) => {
  const expenseDeleted = await Expense.findOneAndDelete({ _id: id });
  return expenseDeleted;
};
