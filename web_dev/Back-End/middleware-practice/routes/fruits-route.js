const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "<h1>Fruits</h1><p>There are many kinds of fruits.</p><ul><li><a href='/api/fruits/apple'>Apple</a></li><li><a href='/api/fruits/banana'>Banana</a></li></ul>"
  );
});

router.get("/apple", (req, res) => {
  res.send(
    "<h1>Apple</h1><p>An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.</p>"
  );
});

router.get("/banana", (req, res) => {
  res.send(
    "<h1>Banana</h1><p>A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe.</p>"
  );
});

module.exports = router;
