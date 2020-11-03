import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: text,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Comment", commentSchema);
export default model;
