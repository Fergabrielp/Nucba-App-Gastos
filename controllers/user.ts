import { Request, Response } from "express";
import {
  createUser,
  deleteOneUser,
  getAllUsers,
  getOneUser,
  updateOneUser,
} from "../services/user";

export const postUser = async (req: Request, res: Response) => {
  try {
    const dataUser = req.body;
    const newUser = await createUser(dataUser);
    res.status(201).json({ msg: "User succesfuly created", newUser });
  } catch (error) {
    res.status(500).json({ msg: "Error creating a new user", error });
  }
};

export const getArrayUsers = async ({}, res: Response) => {
  try {
    const usersArray = await getAllUsers();
    res.status(200).json({ msg: "Users Array: ", usersArray });
  } catch (error) {
    res.status(500).json({ msg: "Error finding users in database", error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userFound = await getOneUser(id);
    res.status(200).json({ msg: "User found:", userFound });
  } catch (error) {
    res.status(500).json({ msg: "Error finding a new user", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;
    const userUpdated = await updateOneUser(id, dataToUpdate);
    res.status(200).json({ msg: "User Updated:", userUpdated });
  } catch (error) {
    res.status(500).json({ msg: "Error updating a user", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userDeleted = await deleteOneUser(id);
    res.status(200).json({ msg: "User deleted:", userDeleted });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting an user", error });
  }
};
