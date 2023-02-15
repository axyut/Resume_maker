const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/connection");
const User = require("../model/userSchema");

router.post("/register", async (req, res) => {
	const { name, email, phone, password } = req.body;
	if (!name || !email || !password) {
		return res
			.status(422)
			.json({ message: "Please fill required fields properly." });
	}

	try {
		const userExist = await User.findOne({ email: email });
		if (userExist) {
			return res
				.status(422)
				.json({ message: "User Email already in use. Please Login." });
		}
		if (password.length < 8) {
			return res
				.status(422)
				.json({ message: "Password Length must be greater than 8." });
		}

		const user = new User({ name, email, phone, password });
		// Middleware Hash happens here
		const registered = await user.save();
		if (registered) {
			res.status(201).json({ message: "User successfully registered." });
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
				//console.log(getToken);
				res.cookie("Jwt Cookie", getToken, {
					expires: new Date(Date.now() + 259200000), // 3 days in miliseconds
					httpOnly: true,
				});

				res.status(200).json({ message: "Login Successful!" });
			}
		} else {
			res.status(500).json({ message: "Invalid Credentials." });
		}
	} catch (error) {
		console.log(error);
	}
});

router.get("/cvProfile", authenticate, (req, res) => {
	console.log("from /cvProfile backend api");
	res.send(req.rootUser);
});

module.exports = router;
