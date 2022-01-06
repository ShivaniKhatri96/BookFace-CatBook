// IN THIS FILE:
// get /users           -returns list of all users
// get /users/:login    -returns information of a specific user
// post /users/         -creates a new user
// post /users/:login   -logs user in
// delete /users/:login -deletes user

const { response } = require("express");
const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

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

//create a new user
router.post("/", (req, res) => {
  //check if all fields are filled out
  if (req.body.login || req.body.email || req.body.password) {
    //password validation on front end
    //search if login or email already exist
    User.find(
      { $or: [{ login: req.body.login }, { email: req.body.email }] },
      function (err, data) {
        if (err) {
          res.send(err);
        } else {
          //check if the search returned any matches (meaning login/email already in use)
          if (
            data.filter((item) => {
              if (item) return true;
            }).length > 0
          ) {
            res
              .status(400)
              .send("Signup failed: Login or email already in use");
          } else {
            //if credentials are unique, create user
            User.create(
              {
                login: req.body.login,
                password: req.body.password,
                email: req.body.email,
              },
              function (err, result) {
                if (err) res.status(500).send(err);
                res.status(201).send("User created");
              }
            );
          }
        }
      }
    );
  }
});

//log user in
// router.post("/login", (req, res) => { //:login or /login?
//   User.findOne(    User.find(
//     { $or: [{ login: req.body.login }, { email: req.body.email }] },
//     function (err, data) {
//       if (err) {
//         res.send(err);
//       } else {
//         //if the login/email exists, check if passwords match
//         if (
//           data.filter((item) => {
//             if (item) return true;
//           }).length > 0
//         ) {
//       }
// });

//update user data (login, password, email)
//it could be separated in three routes for readability (but it will require individual buttons to update)
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
          if (
            data.filter((item) => {
              if (item) return true;
            }).length > 0
          ) {
            res
              .status(400)
              .send("Update failed: Login or email already in use");
          } else {
            //if login is not empty, update login
            if (req.body.login) {
              User.updateOne(
                { login: req.params.id }, //change to id for deployment
                { login: req.body.login },
                function (err, result) {
                  if (err) {
                    res.status(500).send(err);
                  }
                }
              );
            }
            //if email is not empty, update email
            if (req.body.email) {
              User.updateOne(
                { login: req.params.id }, //change to id for deployment
                { email: req.body.email },
                function (err, result) {
                  if (err) {
                    res.status(500).send(err);
                  }
                }
              );
            }
            //if password is not empty, update password (validation on front end)
            //ENCRYPTION NEEDED
            if (req.body.password) {
              User.updateOne(
                { login: req.params.id }, //change to id for deployment
                { password: req.body.password },
                function (err, result) {
                  if (err) {
                    res.status(500).send(err);
                  }
                }
              );
            }
            res.status(200).send("Profile updated");
          }
        }
      }
    );
  }
});

//remove a user
router.delete("/:id", (req, res) => {
  User.deleteOne({ login: req.params.id }, function (err, person) {
    if (err) res.send(err);
    res.status(200).send("User removed");
  });
});

module.exports = router;
