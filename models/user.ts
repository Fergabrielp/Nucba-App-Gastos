import { Model, Schema, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  lastName: string;
  dni: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    lastName: {
      type: String,
      required: [true, "Lastname is required"],
    },

    dni: {
      type: String,
      required: [true, "DNI is required"],
    },
  },
  { versionKey: false }
);

const User: Model<IUser> = model<IUser>("User", UserSchema);

export default User;
