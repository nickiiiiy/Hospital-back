const express = require("express");
const router = express.Router();
const { registrationUser } = require("../controllers/user-controllers.js");

router.post("/registration", registrationUser);

module.exports = router;
