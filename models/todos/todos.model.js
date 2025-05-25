import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      //it is a flag, that will make sure that the task is completed or not
      type: Boolean,
      default: false,
    },
    createdBy: {
      //we will refer to other schema or data set in this
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //this name should be same as that is defined in the other schema
    },
    sub_todos: [
      //array of sub todos
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
