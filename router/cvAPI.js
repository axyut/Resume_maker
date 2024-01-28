const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");

router.get("/cvProfile", authenticate, (req, res) => {
	//console.log(req.userFound);
	res.send(req.userFound);
});

module.exports = router;
