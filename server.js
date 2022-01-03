//setting the server
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

//setting middleware
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//mongo config
const db = require("./backend/config/keys").mongoURI;

//connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//starting server
app.listen(port, () => {
    console.log(`Catbook backend listening at http://localhost:${port}`);
  });
