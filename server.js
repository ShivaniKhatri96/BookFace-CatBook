//REQUESTS AND RESPONSES
//React-router
//------------
// get /                -main page. Redirects to login if user not logged in
// get /login           -login/signup page
// get /profile/:login  -user profile page

//backend/routes/users
//----------------------
// get /users           -returns list of all users
// get /users/:login    -returns information of a specific user
// post /users/         -creates a new user
// delete /users/:login -deletes user

//backend/routes/comments
//-----------------------
// get /comments/       -returns list of all comments
// get /comments/:id    -returns information of a specific comment
// post /comments/      -creates a new comment
// delete /comments/:id -deletes comment

//setting the server
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

//setting routes
const users = require("./backend/routes/users");
const comments = require("./backend/routes/comments");

//setting middleware
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//mongo config
const db = require("./backend/config/keys").mongoURI;

//connecting to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//using routes
app.use("/users", users);
app.use("/comments", comments);

//starting server
app.listen(port, () => {
  console.log(`Catbook backend listening at http://localhost:${port}`);
});
