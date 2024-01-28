const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
	},
	password: {
		type: String,
		required: true,
	},
	role: { type: String, default: "NORMAL" },
	tokens: [{ token: { type: String, required: true } }],
});

// MIDDLEWARE
//pre    works before save() method for db is called and pw is modified
userSchema.pre("save", async function (next) {
	// donot use fat arrow function when deal with this.
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});

// JWT token verification
userSchema.methods.generateAuthToken = async function () {
	try {
		let sendToken = jwt.sign(
			{
				userId: this._id,
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				role: this.role,
			},
			process.env.AUTH_SECRET,
			{ expiresIn: "1h" }
		);
		this.tokens = this.tokens.concat({ token: sendToken });
		await this.save();
		return sendToken;
	} catch (error) {
		console.log(error);
	}
};

const User = mongoose.model("USER", userSchema);

module.exports = User;
