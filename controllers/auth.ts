import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import bcryptjs from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  const { name, email, password }: IUser = req.body;
  const user = new User({ name, email, password });
  const salt = bcryptjs.genSaltSync();

  user.password = bcryptjs.hashSync(password, salt);

  await user.save();
  res.status(201).json({ msg: "User succesfuly created", user });
};
