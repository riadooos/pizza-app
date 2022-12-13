import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false },
  },
  { timestamps: true }
);
