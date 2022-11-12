const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	name: {
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
		let sendToken = jwt.sign({ _id: this._id }, process.env.AUTH_SECRET);
		this.tokens = this.tokens.concat({ token: sendToken });
		await this.save();
		return sendToken;
	} catch (error) {
		console.log(error);
	}
};

const User = mongoose.model("USER", userSchema);

module.exports = User;
