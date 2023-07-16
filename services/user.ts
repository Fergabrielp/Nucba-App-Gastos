import Expense, { IExpense } from "../models/expense";
import User, { IUser } from "../models/user";

export const createUser = async (user: IUser) => {
  const newUser = await User.create(user);
  return newUser;
};

export const getAllUsers = async () => {
  const users = await User.find({});
  return users;
};

export const getOneUser = async (id: string) => {
  const userFound = await User.findOne({ _id: id });
  return userFound;
};

export const updateOneUser = async (id: string, dataToUpdate: IUser) => {
  const userUpdated = await User.findOneAndUpdate({ _id: id }, dataToUpdate, {
    new: true,
  });
  return userUpdated;
};

export const deleteOneUser = async (id: string) => {
  const userDeleted = await User.findOneAndDelete({ _id: id });
  return userDeleted;
};

export const createOneExpense = async (id: string, expense: IExpense) => {
  const userFound = await getOneUser(id);
  if (userFound) {
    const newExpense = await Expense.create({ ...expense, user: id });
    return newExpense;
  } else {
    throw new Error("User not found");
  }
};
