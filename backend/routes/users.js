// IN THIS FILE:
// get      /users/all                          -returns list of all users
// get      /users/logout                       -logs user out
// get      /users/:id                          -returns information on a specific user
// get      /users/friends/:id                  -returns user's friend list
// post     /users/                             -creates a new user
// post     /users/login                        -logs user in
// post     /users/friends/send/:id             -sends a friend request
// post     /users/friends/accept/:id           -accepts a friend request
// patch    /users/:id                          -updates user info (login, password, email)
// patch    /users/profilePic/:id               -updates profile picture
// patch    /users/coverPic/:id                 -updates profile cover picture
// delete   /users/:id                          -deletes user

const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
const fetch = require("node-fetch");
const catKey = process.env.catApiKey || require("../config/keys").catApiKey;

//return list off all users (without passwords)
router.get("/all", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.user);
  User.find({}, { password: 0 }, function (err, people) {
    if (err) res.status(500).send(err);
    res.status(200).send(people);
  });
});

//logout user
router.get("/logout", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  req.logout();
  res.send("User logged out");
});

//return info on specific user (without password)
//requires user id as a parameter
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, { password: 0 }, function (err, person) {
    if (err) res.status(500).send(err);
    res.status(200).send(person);
  });
});

//return info on specific user (without password)
//requires user login as a parameter
router.get("/login/:login", (req, res) => {
  User.findOne(
    { login: req.params.login },
    { password: 0 },
    function (err, person) {
      if (err) res.status(500).send(err);
      res.status(200).send(person);
    }
  );
});

//return user's friend list
//requires user id as a parameter
router.get("/friends/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  User.findOne({ _id: req.params.id }, function (err, person) {
    if (err) res.status(500).send(err);
    res.status(200).send(person.friend_list);
  });
});

//create a new user
//requires 'login', 'email' and 'password' fields in the request body
router.post("/", (req, res) => {
  //deconstruct body
  var { login, email, password } = req.body;
  //check if all fields are filled out
  if (login && email && password) {
    //search if login or email already exist
    User.find(
      { $or: [{ login: login.toLowerCase() }, { email: email.toLowerCase() }] },
      function (err, data) {
        if (err) {
          res.send(err);
        } else {
          //check if the search returned any matches (meaning login/email already in use)
          if (data.length > 0) {
            res
              .status(400)
              .send("Signup failed: Login or email already in use");
          } else {
            //if credentials are unique, hash password and create user
            //hash password
            bcrypt.genSalt(10, (err, salt) =>
              bcrypt.hash(password, salt, (err, hash) => {
                if (err) throw err;
                password = hash;
                //create user
                console.log(password);
                User.create(
                  {
                    login: login.toLowerCase(),
                    password: password,
                    email: email.toLowerCase(),
                  },
                  function (err, result) {
                    if (err) res.status(500).send(err);
                    //res.redirect("./frontend/src/pages/Home")
                    res.status(201).send("User created");
                  }
                );
              })
            );
            //call the cat API to generate the profile picture
            fetch("https://api.thecatapi.com/v1/images/search", {
              headers: {
                "Content-Type": "application/json",
                "x-api-key": catKey,
              },
            })
              .then((cat) => cat.json())
              .then((cat) =>
                User.updateOne(
                  { login: req.body.login },
                  { profile_pic: cat[0].url }
                )
              );
          }
        }
      }
    );
  }
});

//log user in
router.post("/login", passport.authenticate("local"), (req, res) => {
  User.findOne(
    { login: req.body.login.toLowerCase() },
    { _id: 1 },
    function (err, person) {
      if (err) res.status(500).send(err);
      res.status(200).send(person);
    }
  );
  console.log(req.body.login.toLowerCase());
});

//update user info
//requires user id as parameter
//optional fields in the request body: 'login', 'email' and 'password'
router.patch("/:id", (req, res) => {
  //check if login or body are not empty
  if (req.body.login || req.body.email) {
    //search for users with the login or email
    User.findOne(
      { $or: [{ login: req.body.login }, { email: req.body.email }] },
      function (err, data) {
        if (err) {
          res.send(err);
        } else {
          //check if the search returned any matches (meaning login/email already in use)
          if (data) {
            res
              .status(400)
              .send("Update failed: Login or email already in use")
              .end();
          } else {
            //if login is not empty, update login
            if (req.body.login) {
              User.updateOne(
                { _id: req.params.id },
                { login: req.body.login },
                function (err, result) {
                  if (err) {
                    res.status(500).send(err).end();
                  }
                }
              );
            }
            //if email is not empty, update email
            if (req.body.email) {
              User.updateOne(
                { _id: req.params.id },
                { email: req.body.email },
                function (err, result) {
                  if (err) {
                    res.status(500).send(err).end();
                  }
                }
              );
            }
          }
        }
      }
    );
  }

  //if password is not empty, update password (validation on front end)
  if (req.body.password) {
    bcrypt.genSalt(10, (err, salt) =>
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) throw err;
        req.body.password = hash;
        User.updateOne(
          { _id: req.params.id },
          { password: req.body.password },
          function (err, result) {
            if (err) {
              res.status(500).send(err).end();
            }
          }
        );
      })
    );
  }
  if (!res.end) res.status(200).send("Profile updated");
});

//update profile pic
//requires user id as parameter
//requires a 'profilePic' field in the request body with the url of the image
router.patch("/profilePic/:id", (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    { profile_pic: req.body.profilePic },
    function (err, result) {
      if (err) res.status(500).send(err).end();
      res.status(200).send("Picture updated");
    }
  );
});

//update cover pic
//requires user id as parameter
//requires a 'coverPic' field in the request body with the url of the image
router.patch("/coverPic/:id", (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    { cover_pic: req.body.coverPic },
    function (err, result) {
      if (err) res.status(500).send(err).end();
      res.status(200).send("Picture updated");
    }
  );
});

//remove a user
//requires user id as parameter
router.delete("/:id", (req, res) => {
  User.deleteOne({ login: req.params.id }, function (err, person) {
    if (err) res.send(err);
    res.status(200).send("User removed");
  });
});

module.exports = router;
