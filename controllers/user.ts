import { Request, Response } from "express";
import User, { IUser } from "../models/user";

export const getUser = async ({}, res: Response) => {
  const users: IUser[] = await User.find();

  res.status(200).json({ msg: "User succesfuly created", users });
};
