const express = require("express");
const router = express.Router();

const { loginUser, signupUser } = require("../controllers/userControllers");

// login post route
router.post("/login", loginUser);

// signup post route
router.post("/signup", signupUser);

module.exports = router;
