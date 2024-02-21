const mongoose = require("mongoose");

const commentReplySchema = new mongoose.Schema({
  commentContent: {
    type: String,
    required: true,
  },
  depth: {
    type: Number,
    required: true,
  },
  isAnonymous: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  commentReplys: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

commentReplySchema.set("timestamps", {
  createdAt: "commentCreatedAt",
  updatedAt: "commentUpdatedAt",
});

const commentSchema = new mongoose.Schema({
  commentContent: {
    type: String,
    required: true,
  },
  isAnonymous: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //required: true 추가해야함
  depth: {
    type: Number,
    required: true,
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
  commentReplys: [commentReplySchema],
});

commentSchema.set("timestamps", {
  createdAt: "commentCreatedAt",
  updatedAt: "commentUpdatedAt",
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
