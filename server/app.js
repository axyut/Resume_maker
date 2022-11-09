//jshint esversion:6

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

//MongoDB
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connection Successful!`);
  })
  .catch((err) => console.log(err));

// Middleware
const middleware = (req, res, next) => {
  next();
};

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/aboutme", middleware, (req, res) => {
  res.send("About Me");
});

app.get("/signin", (req, res) => {
  res.send("Sign in page");
});

app.get("/signup", (req, res) => {
  res.send("Create account page");
});

app.get("/settings", (req, res) => {
  res.send("settings");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at PORT 8000`);
});
