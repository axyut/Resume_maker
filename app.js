//jshint esversion:6

require("dotenv").config();
require("./db/connection");
const User = require("./model/userSchema");
const express = require("express");

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
app.use(require("./router/auth"));

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("./client/build/index.html"));
// }

app.listen(process.env.PORT, () => {
	console.log(
		`Server is running at PORT ${process.env.PORT}. http://localhost:${process.env.PORT}`
	);
});
