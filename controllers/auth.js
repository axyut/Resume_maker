const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");

const signin = async (req, res) => {
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
				const { _id, firstName, lastName, email, role } = userExist;
				// jWT token generate
				const getToken = await userExist.generateAuthToken();
				// console.log(getToken);

				// Optional set cookie
				// res.cookie("Jwt Cookie", getToken, {
				// 	expires: new Date(Date.now() + 259200000), // 3 days in miliseconds
				// 	httpOnly: true,
				// });

				res.status(200).json({
					message: "Login Successful!",
					token: getToken,
					user: {
						userId: _id,
						firstName,
						lastName,
						email,
						role,
					},
				});
			}
		} else {
			res.status(500).json({ message: "Invalid Credentials." });
		}
	} catch (error) {
		console.log(error);
	}
};

const register = async (req, res) => {
	const { firstName, lastName, email, phone, password } = req.body;
	if (!firstName || !lastName || !email || !password) {
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

		const user = new User({ firstName, lastName, email, phone, password });
		// Middleware Hash happens here
		const registered = await user.save();
		if (registered) {
			res.status(201).json({ message: "User successfully registered." });
		}
	} catch (error) {
		res.status(500).json({ message: "Failed to register." });
	}
};

module.exports = { signin, register };
