import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    passworde: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //second object after the schema or structure
);

export const User = mongoose.model("User", userSchema); //in braces : first name and second is the schema written above
//                                  ^
//                                  |
//                                 name
//the names are stores with a 's' in the end and in lowercase.
//the name given will or can be used as reference or linking with other schemas
