// IN THIS FILE
// get /comments/                       -returns all comments from all users
// get /comments/all/:userId            -returns all comments from a specific user
// get /comments/:userId/:commentId     -returns a specific comment
// post /comments/:userId/              -creates a new comment
// delete /comments/:userId/:commentId  -deletes a comment

const express = require("express");
const { ConnectionStates } = require("mongoose");
const router = express.Router();
const { User } = require("../models/User");
const { CommentSchema } = require("../models/Comment"); //to remove for production

//return all comments from all users
router.get("/", (req, res) => {
  User.find({}, { _id: 1, login: 1, comments: 1 }, function (err, comments) {
    if (err) res.status(500).send(err);
    res.status(200).send(comments);
  });
});

//return all comments from a specific user
//todo

//return a specific comment
router.get("/:userId/:commentId", (req, res) => {
  User.findById(req.params.userId, function (err, data) {
    if (err) res.status(500).send(err);
    const test = data.children.id(req.params.commentId);
    res.status(200).send(test);
  });
});

//post a new comment
router.post("/:userId", (req, res) => {
  User.findByIdAndUpdate(
    req.params.userId,
    {
      $push: {
        comments: {
          replyTo: req.body.replyTo,
          repliedBy: req.body.repliedBy,
          content: req.body.content,
          img_link: req.body.img_link,
          likes: req.body.likes,
        },
      },
    },
    { upsert: true, new: true },
    function (err) {
      if (err) res.status(500).send(err);
      res.status(201).send("Comment posted");
    }
  );
  // if (req.body.replyTo) {
  //   Comment.findById(req.params.replyTo, function (err, comment) {
  //     console.log(comment);
  //   });
  // }
  //it seems there is no way without user id. check how to add a schema as a type in another schema
});

module.exports = router;
