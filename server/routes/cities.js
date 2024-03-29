const express = require("express");
const cityModel = require("../model/cityModel");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});

router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  console.log(req.body);
  const newCity = new cityModel({
    name: req.body.name,
    country: req.body.country
  });
  newCity
    .save()
    .then(city => {
      res.send(city);
    })
    .catch(err => {
      res.status(500).send("Server error");
    });
});

module.exports = router;
