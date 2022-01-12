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
const secretCat = require("./backend/config/keys").secret;
app.use(
  session({
    secret: secretCat,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
//setting routes
const users = require("./backend/routes/users");
app.use("/users", users);
const comments = require("./backend/routes/comments");
app.use("/comments", comments);
const pages = require("./backend/routes/pages");
app.use("/pages", pages);
const catAPI = require("./backend/routes/catAPI");
app.use("/catAPI", catAPI);

//mongo config and connection
const db = process.env.MONGODB_URI || require("./backend/config/keys").mongoURI; //this could throw an error on deployment
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => console.log(err));

//starting server
app.listen(port, () => {
  console.log(`Catbook backend listening at http://localhost:${port}`);
});
