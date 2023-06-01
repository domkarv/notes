const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("../lib/index.html");
});

router.post("/users", (req, res) => {
  console.log(req.body);
  res.json({ name: req.body.userName });
});

module.exports = router;
