// IN THIS FILE
// get      /comments/                        -returns all comments from all users
// get      /comments/all/:userId             -returns all comments from a specific user
// get      /comments/:userId/:commentId      -returns a specific comment
// post     /comments/:userId/                -creates a new comment
// delete   /comments/:userId/:commentId      -if a comment has no replies, it deletes it; otherwise, it changes its contents to "Message deleted by user"
// delete   /comments/nuke/:userId             -fully deletes all comments from a user

const express = require("express");
const { ConnectionStates } = require("mongoose");
const router = express.Router();
const { User } = require("../models/User");

//return all comments from all users
//router.get("/", (req, res) => {
//   User.find({}, { _id: 1, login: 1, comments: 1 }, function (err, comments) {
//     if (err) res.status(500).send(err);
//     res.status(200).send(comments);
//   });
// });

// router.get("/", (req, res) => {
//   User.find(
//     {},
//     { comments: 1 },
//     { sort: { date: 1 } },
//     function (err, comments) {
//       if (err) res.status(500).send(err);
//       res.status(200).send(comments);
//     }
//   );
// });

router.get("/", (req, res) => {
  User.find(
    {},
    { comments: 1 },
    { sort: { "comments.date": -1 } },
    function (err, comments) {
      if (err) res.status(500).send(err);
      res.status(200).send(comments);
    }
  );
});

//return all comments from a specific user
//requires user id as parameter
router.get("/:userId", (req, res) => {
  User.findById(req.params.userId, { comments: 1 }, function (err, data) {
    if (err) res.status(500).send(err);
    res.status(200).send(data);
  });
});

//return a specific comment
//requires comment id as parameter
router.get("/single/:commentId", (req, res) => {
  User.findOne({
    "comments._id": req.params.commentId,
  }).then((user) => {
    res.status(200).send(user.comments.id(req.params.commentId));
  });
});

//post a new comment
//requires user id as parameter
//requires 'content' field in the request body. Optional fields:
//  'replyTo'     -id of the comment it's replying to. If it's a reply, this field is required.
//  'media_link'  -url of the image / video
router.post("/:userId", (req, res) => {
  var repliedById = "hola";
  const test = User.findByIdAndUpdate(
    req.params.userId,
    {
      $push: {
        comments: {
          replyTo: req.body.replyTo,
          //repliedBy: req.body.repliedBy,
          content: req.body.content,
          media_link: req.body.media_link,
        },
      },
    },
    { upsert: true, new: true },
    function (err, result) {
      if (err) res.status(500).send(err);
      repliedById = result.comments[result.comments.length - 1]._id;
      res.status(201).send("Comment posted");
    }
  );

  //if comment is a reply, add comment ID to the list of replies of parent comment
  if (req.body.replyTo) {
    User.findOne({
      "comments._id": req.body.replyTo,
    }).then((user) => {
      user.comments.id(req.body.replyTo).repliedBy.push(repliedById);
      user.save();
    });
  }
});

//delete a comment
//requires comment id as parameter
router.delete("/:commentId", (req, res) => {
  User.findOne({
    "comments._id": req.params.commentId,
  })
    .then((user) => {
      if (user.comments.id(req.params.commentId).repliedBy.length < 1) {
        user.comments.pull(user.comments.id(req.params.commentId));
      } else {
        user.comments.id(req.params.commentId).content =
          "Message deleted by user";
      }
      user.save();
    })
    .then(res.status(200).send("Comment deleted"));
});

//delete all comments from a user (FULLY DELETED)
//requires user id as parameter
router.delete("/nuke/:userId", (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      user.comments = [];
      user.save();
    })
    .then(res.status(200).send("All comments deleted"));
});

module.exports = router;
