const mongoose = require("mongoose");

mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((conn) => {
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	})
	.catch((err) => {
		console.log(err);
	});

// Async Way
// const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(process.env.MONGO_CONNECT, {
// 			useNewUrlParser: true,
// 		});
// 		console.log(`MongoDB Connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.log(error);
// 		process.exit(1);
// 	}
// };
