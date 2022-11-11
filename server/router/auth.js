const express = require("express");
const router = express.Router();

require("../db/connection");
const User = require("../model/userSchema");

// Middleware
const middleware = (req, res, next) => {
  next();
};

router.get("/", (req, res) => {
  res.send("Starting Router!");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ message: "Please fill required fields." });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ message: "User Email already in use." });
    }

    const user = new User({ name, email, phone, password });

    const registered = await user.save();
    if (registered) {
      res.status(201).json({ message: "user successfully registered." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to register." });
  }
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
