//jshint esversion:6

require("dotenv").config();
require("./db/connection");
const express = require("express");
const cors = require("cors");

const rootRouter = require("./router/root");
const connectDB = require("./db/connection");

const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/dist"));

	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
app.use("", rootRouter);

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("./client/build/index.html"));
// }

const start = () => {
	const PORT = process.env.PORT;
	const DB_URL = process.env.CONNECT_DB;
	try {
		connectDB(DB_URL).then(() => {
			app.listen(PORT, () => {
				console.log(
					`Server is running at PORT ${PORT}. http://localhost:${PORT}`
				);
			});
		});
	} catch (error) {
		console.log(error);
	}
};

start();
