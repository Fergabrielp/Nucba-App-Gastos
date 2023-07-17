import Expense, { IExpense } from "../models/expense";
import User from "../models/user";

export const createOneExpense = async (id: string, expense: IExpense) => {
  const userFound = await User.findById(id);
  if (!userFound) {
    throw new Error(`User not found with id: ${id}`);
  }
  const newExpense = await Expense.create({ ...expense, user: id });
  return newExpense;
};

export const getAllExpenses = async () => {
  const expenses = await Expense.find({}).populate("user", "name");
  if (expenses.length) {
    return expenses;
  } else {
    throw new Error("No expenses created in database");
  }
};

export const getOneExpense = async (id: string) => {
  const expenseFound = await Expense.findOne({ _id: id }).populate(
    "user",
    "name"
  );
  if (expenseFound) {
    return expenseFound;
  } else {
    throw new Error(`Expense not found with id: ${id}`);
  }
};

export const updateOneExpense = async (id: string, dataToUpdate: IExpense) => {
  const expenseUpdated = await Expense.findOneAndUpdate(
    { _id: id },
    dataToUpdate,
    {
      new: true,
    }
  );
  if (expenseUpdated) {
    return expenseUpdated;
  } else {
    throw new Error(`Expense not found with id: ${id}`);
  }
};

export const deleteOneExpense = async (id: string) => {
  const expenseDeleted = await Expense.findOneAndDelete({ _id: id });
  if (expenseDeleted) {
    return expenseDeleted;
  } else {
    throw new Error(`Expense not found with id: ${id}`);
  }
};
