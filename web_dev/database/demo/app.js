const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/express-mongo";

mongoose
  .connect(url)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log(`Error: ${err}`));

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  email: { type: String, required: true },
  personal: {
    address: { type: String, required: true },
    age: { type: Number, required: true },
  },
});

const User = mongoose.model("user", schema);

const user1 = new User({
  name: "John",
  number: 1234567890,
});
// user1.save();

const user2 = new User({
  name: "Omkar Date",
  number: 7400288080,
  email: "omkardate29@gmail.com",
  personal: {
    address: "Pune",
    age: 20,
  },
});
// user2.save();

const data = User.find();
data.then((res) => console.log(res));
