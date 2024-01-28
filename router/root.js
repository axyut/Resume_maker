const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const cvRouter = require("./cvAPI");

router.use("", authRouter);
router.use("", cvRouter);

module.exports = router;
