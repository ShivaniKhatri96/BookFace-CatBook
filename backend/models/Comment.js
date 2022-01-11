const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//comment schema
const CommentSchema = new Schema({
  replyTo: String,
  repliedBy: [String],
  content: String,
  media_link: String,
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

//creates a new collection
//const Comment = mongoose.model("comments", CommentSchema);

module.exports = { CommentSchema };
