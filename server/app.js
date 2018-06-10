const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === "test") {
  mongoose.connect("mongodb://localhost/APIAuthenticationTEST");
} else {
  mongoose.connect("mongodb://localhost/APIAuthentication");
}

const users = require("./routes/users");

const app = express();

// Middlewares
if (process.env.NODE_ENV !== "test") {
  app.use(logger("dev"));
}

app.use(bodyParser.json());

// Routes
app.use("/users", users);

module.exports = app;
