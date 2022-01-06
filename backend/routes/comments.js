const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

router.get("/", (req, res) => {
  res.json("this works");
});
// get /comments/       -returns list of all comments
// get /comments/:id    -returns information of a specific comment
// post /comments/      -creates a new comment
// delete /comments/:id -deletes comment

module.exports = router;
