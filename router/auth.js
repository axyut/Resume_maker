const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");
const { signin, register } = require("../controllers/auth");

router.post("/register", register);
router.post("/signin", signin);

router.get("/cvProfile", authenticate, (req, res) => {
	//console.log(req.userFound);
	res.send(req.userFound);
});

module.exports = router;
