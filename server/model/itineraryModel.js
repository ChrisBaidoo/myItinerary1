const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const itinerarySchema = new Schema({
  title: {
    type: String
  },
  profileImage: {
    type: String
  },

  duration: {
    type: Number
  },
  price: {
    type: String
  },
  rating: {
    type: Number
  },
  hashtags: {
    type: Array
  },
  city: {
    type: String
  }
});

module.exports = itinerary = mongoose.model("itinerary", itinerarySchema);
