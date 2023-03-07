const express = require("express");
const router = express.Router();
router.use(express.static("./lib"));

const Place = require("../models/placeScema");

// const DUMMY_PLACES = [
//   {
//     id: "p1",
//     title: "Empire State Building",
//     description: "One of the most famous sky scrapers in the world!",
//     location: {
//       lat: 40.7484474,
//       lng: -73.9871516,
//     },
//     address: "20 W 34th St, New York, NY 10001",
//     creator: "u1",
//   },
// ];

router.get("/:pId", async (req, res, next) => {
  const placeId = req.params.pId;

  let place = {};

  try {
    place = await Place.findById(placeId);
  } catch (err) {
    return res
      .status(404)
      .json({ message: "Could not find a place for the provided id." });
  }

  res.json({ place });
  // res.send(place);
});

router.get("/api/add", (req, res, next) => {
  res.sendFile("/lib/place.html", { root: "." });
});

router.post("/add", async (req, res, next) => {
  const { title, description, address, creator, lat, lng, image } = req.body;

  const newPlace = new Place({
    title,
    // This is same as title: title,
    description,
    address,
    creator,
    location: { lat, lng },
    image,
  });

  try {
    await newPlace.save();
  } catch (err) {
    return res.status(404).json({ message: "Can't add place" });
  }

  res.status(201).json({ place: newPlace });
});

module.exports = router;
