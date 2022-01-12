// IN THIS FILE:
// get /users/all         -returns list of all users
// get /users/:id         -returns information of a specific user
// get /friends/:id       -returns user's friend list
// get /users/logout      -logs user out
// post /users/           -creates a new user
// post /users/login     -logs user in
// patch /users/:id       -updates user info (login, password, email)
// patch /profilePic/:id  -updates profile picture
// patch /coverPic/:id    -updates profile cover picture
// delete /users/:id      -deletes user

const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

//return list off all users (without passwords)
router.get("/all", (req, res) => {
  User.find({}, { password: 0 }, function (err, people) {
    if (err) res.status(500).send(err);
    res.status(200).send(people);
  });
});

//return info on specific user (without password)
router.get("/:id", (req, res) => {
  User.findOne(
    { login: req.params.id },
    { password: 0 },
    function (err, person) {
      if (err) res.status(500).send(err);
      res.status(200).send(person);
    }
  );
});

//return user's friend list
router.get("/friends/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, function (err, person) {
    if (err) res.status(500).send(err);
    res.status(200).send(person.friend_list);
  });
});

//logout
router.get("/logout", (req, res) => {
  req.logout();
  res.send("User logged out");
  //res.redirect('/login');
});

//create a new user
router.post("/", (req, res) => {
  //deconstruct body
  var { login, email, password } = req.body;
  //check if all fields are filled out
  if (login || email || password) {
    //password validation on front end
    //search if login or email already exist
    User.find(
      { $or: [{ login: login }, { email: email }] },
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
                    login: login,
                    password: password,
                    email: email,
                  },
                  function (err, result) {
                    if (err) res.status(500).send(err);
                    //res.redirect("./frontend/src/pages/Home")
                    res.status(201).send("User created");
                  }
                );
              })
            );
          }
        }
      }
    );
  }
});

//log user in
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("Authorized");
});

//update user data (login, password, email)
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
                { _id: req.params.id }, //change to id for deployment
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
                { _id: req.params.id }, //change to id for deployment
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
          { _id: req.params.id }, //change to id for deployment
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
router.delete("/:id", (req, res) => {
  User.deleteOne({ login: req.params.id }, function (err, person) {
    if (err) res.send(err);
    res.status(200).send("User removed");
  });
});

module.exports = router;
