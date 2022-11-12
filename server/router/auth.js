const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/connection");
const User = require("../model/userSchema");
const { createIndexes } = require("../model/userSchema");

// Middleware
// const middleware = (req, res, next) => {
//   next();
// };

router.get("/", (req, res) => {
	res.send("Starting Router!");
});

router.post("/register", async (req, res) => {
	const { name, email, phone, password } = req.body;
	if (!name || !email || !password) {
		return res
			.status(422)
			.json({ message: "Please fill required fields." });
	}

	try {
		const userExist = await User.findOne({ email: email });
		if (userExist) {
			return res
				.status(422)
				.json({ message: "User Email already in use." });
		}

		const user = new User({ name, email, phone, password });
		// Middleware Hash happens here
		const registered = await user.save();
		if (registered) {
			res.status(201).json({ message: "user successfully registered." });
		}
	} catch (error) {
		res.status(500).json({ message: "Failed to register." });
	}
});

router.post("/signin", async (req, res) => {
	const { email, password } = req.body;
	try {
		if (!email || !password) {
			return res
				.status(422)
				.json({ message: "Please fill required fields." });
		}
		const userExist = await User.findOne({ email: email });
		if (userExist) {
			const verifiedPassword = await bcrypt.compare(
				password,
				userExist.password
			);
			if (verifiedPassword) {
				// jWT token generate
				const getToken = await userExist.generateAuthToken();
				console.log(getToken);
				res.cookie("Jwt Cookie", getToken, {
					expires: new Date(Date.now() + 259200000), // 3 days in miliseconds
					httpOnly: true,
				});

				res.send("login successfull");
			}
		} else {
			res.status(500).json({ message: "Invalid Credentials." });
		}
	} catch (error) {
		console.log(error);
	}
});

router.get("/aboutme", (req, res) => {
	res.send("About Me");
});

router.get("/signup", (req, res) => {
	res.send("Create account page");
});

router.get("/settings", (req, res) => {
	res.send("settings");
});

module.exports = router;
