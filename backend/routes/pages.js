const express = require("express");
const router = express.Router();
// const { User } = require("../models/User");
// const bcrypt = require("bcrypt");
// const passport = require("passport");
const path = require("path");

//homepage
router.get("/", (req, res) => {
  //this gotta change to passport
  res.render(path.resolve(__dirname + "../../../frontend/src/pages/Home.js"));
});

router.get("/login", (req, res) => {
  res.render(path.resolve(__dirname + "../../../frontend/src/pages/LogIn.js"));
});

router.get("/profile", (req, res) => {
  res.render(
    path.resolve(__dirname + "../../../frontend/src/pages/Profile.js")
  );
});

module.exports = router;
