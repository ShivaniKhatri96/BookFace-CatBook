const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const CommentSchema = new Schema({
  userId: String,
  replyTo: String,
  repliedBy: [String],
  content: String,
  img_link: String,
  video_link: String,
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = { CommentSchema };
