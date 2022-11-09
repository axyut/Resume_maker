const express = require("express");
const router = express.Router();

// Middleware
const middleware = (req, res, next) => {
  next();
};

router.get("/", (req, res) => {
  res.send("Starting Router!");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
});

router.get("/aboutme", middleware, (req, res) => {
  res.send("About Me");
});

router.get("/signin", (req, res) => {
  res.send("Login page");
});

router.get("/signup", (req, res) => {
  res.send("Create account page");
});

router.get("/settings", (req, res) => {
  res.send("settings");
});

module.exports = router;
