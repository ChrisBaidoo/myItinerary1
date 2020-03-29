const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//const cors = require("cors");
//app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const passport = require("passport");
// const users = require("./routes/api/users");

app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/user", require("./routes/user"));

// Passport middleware
app.use(passport.initialize()); // Passport config

require("./passport")(passport); // Routes
// app.use("/api/users", users);

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const db = require("./keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));
