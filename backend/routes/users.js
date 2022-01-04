const express = require("express");
const router = express.Router();
const { createUser } = require("../models/User");

//dummy data. to be removed once we have the final db
router.get("/users/dummyDB", (req, res) => {
  createUser().then(res.status(201).send("201 - User created"));
});

// get /users           -returns list of all users
// get /users/:login    -returns information of a specific user
// post /users/         -creates a new user
// delete /users/:login -deletes user

module.exports = router;
