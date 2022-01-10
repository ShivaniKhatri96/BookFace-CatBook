const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { CommentSchema } = require("../models/Comment"); //to remove for production

//user schema
const UserSchema = new Schema({
  login: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  profile_pic: String,
  comments: [CommentSchema],
  profile_pic: String,
  cover_pic: String,
  friend_list: [String],
  notifications: {
    mentions: [{ comment_link: String, mention_viewed: Boolean }],
    friend_req: [{ login: String, req_viewed: Boolean }],
  },
  userSince: { type: Date, default: Date.now },
});

const User = mongoose.model("users", UserSchema);

module.exports = { User };
