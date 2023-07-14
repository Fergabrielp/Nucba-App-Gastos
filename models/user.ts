import { Model, Schema, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
  },

  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const User: Model<IUser> = model<IUser>("User", UserSchema);

export default User;