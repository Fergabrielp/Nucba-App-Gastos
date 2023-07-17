import User, { IUser } from "../models/user";

export const createUser = async (user: IUser) => {
  const newUser = await User.create(user);
  return newUser;
};

export const getAllUsers = async () => {
  const users = await User.find({});
  if (users.length) {
    return users;
  } else {
    throw new Error("No users created in database");
  }
};

export const getOneUser = async (id: string) => {
  const userFound = await User.findOne({ _id: id });
  if (userFound) {
    return userFound;
  } else {
    throw new Error(`User not found with id: ${id}`);
  }
};

export const updateOneUser = async (id: string, dataToUpdate: IUser) => {
  const userUpdated = await User.findOneAndUpdate({ _id: id }, dataToUpdate, {
    new: true,
  });
  if (userUpdated) {
    return userUpdated;
  } else {
    throw new Error(`User not found with id: ${id}`);
  }
};

export const deleteOneUser = async (id: string) => {
  const userDeleted = await User.findOneAndDelete({ _id: id });
  if (userDeleted) {
    return userDeleted;
  } else {
    throw new Error(`User not found with id: ${id}`);
  }
};
