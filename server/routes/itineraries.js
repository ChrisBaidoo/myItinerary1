const express = require("express");
const itineraryModel = require("../model/itineraryModel");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});

router.get("/all", (req, res) => {
  itineraryModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

//this is how you implement a city route by specific city
router.get("/:city", (req, res) => {
  let itineraryRequested = req.params.city;
  itineraryModel
    .findOne({ city: itineraryRequested })
    .then(itinerary => {
      res.send(itinerary);
    })
    .catch(err => console.log(err));
});

module.exports = router;
