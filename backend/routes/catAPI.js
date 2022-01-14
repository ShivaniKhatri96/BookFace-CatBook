const express = require("express");
const router = express.Router();
const catKey = process.env.CatApiKey || require("../config/keys").catApiKey;
const fetch = require("node-fetch");

//returns url to random car picture
router.get("/", (req, res) => {
  console.log(catKey);
  fetch("https://api.thecatapi.com/v1/images/search", {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": catKey,
    },
  })
    .then((cat) => cat.json())
    .then((cat) => res.status(200).send(cat[0].url));
});
//test
module.exports = router;
