//REQUESTS AND RESPONSES
//React-router
//------------
// get /                -main page. Redirects to login if user not logged in
// get /login           -login/signup page
// get /profile/:login  -user profile page

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
const session = require("express-session");
const passport = require("passport");
require("./backend/config/passport")(passport);

//setting middleware
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret", //this will come from env file
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
//setting routes
const users = require("./backend/routes/users");
const comments = require("./backend/routes/comments");
const pages = require("./backend/routes/pages");
app.use("/users", users);
app.use("/comments", comments);
app.use("/pages", pages);

//mongo config and connection
const db = require("./backend/config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => console.log(err));

//starting server
app.listen(port, () => {
  console.log(`Catbook backend listening at http://localhost:${port}`);
});
