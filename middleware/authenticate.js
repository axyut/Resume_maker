const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			throw new Error("Please get token.", 401);
		}
		const token = authHeader.split(" ")[1];

		const verifyToken = jwt.verify(token, process.env.AUTH_SECRET);

		const userFound = await User.findOne({
			_id: verifyToken.userId,
			"tokens.token": token,
		}).select("-password");

		if (!userFound) {
			throw new Error("User not found.");
		}

		req.token = token;
		req.userFound = userFound;

		console.log("Sucessfully Authenticated.");
		next();
	} catch (error) {
		if (error.message == "jwt expired") {
			res.status(500).json({ message: error.message });
			console.log(error);
		}
		res.status(500).json({ message: "Unauthorized Access." });
		console.log(error);
	}
};

module.exports = authenticate;
