import { Schema, model } from "mongoose";

export const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    preferences: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
