const express = require("express");
const router = express.Router();

//dummy data. to be removed once we have the final db
router.get("/users/dummyDB", (req, res) => {
  const dummyDB = [
    { id: 1, login: "dani", password: "danipass", profilePic: null },
    { id: 2, login: "ali", password: "alipass", profilePic: null },
    { id: 3, login: "shiv", password: "shivpass", profilePic: null },
  ];

  res.json(dummyDB);
});

module.exports = router;
