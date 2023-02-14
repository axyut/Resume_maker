const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
	try {
		const token = req.cookies.token;
		const verifyToken = jwt.verify(token, process.env.AUTH_SECRET);

		const rootUser = await User.find({
			_id: verifyToken._id,
			"tokens.token": token,
		});

		if (!rootUser) {
			throw new Error("User not found.");
		}

		req.token = token;
		req.rootUser = rootUser;
		req.userID = rootUser._id;

		console.log("Sucessfully Authenticated.");
		next();
	} catch (error) {
		res.status(500).json({ message: "Unauthorized Access." });
		console.log(error);
	}
};

module.exports = authenticate;
