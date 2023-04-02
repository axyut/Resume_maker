const mongoose = require("mongoose");

// Sync
// mongoose
// 	.connect(process.env.DB, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then((conn) => {
// 		console.log(`MongoDB Connected: ${conn.connection.host}`);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

//Async Way
const connectDB = async (URI) => {
	try {
		const conn = await mongoose.connect(URI, {
			useNewUrlParser: true,
		});
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
