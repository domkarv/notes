const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = "mongodb://127.0.0.1:27017/compsDB";
mongoose.connect(mongoDB, (err) => {
  if (err) console.log(`Unable to connect to MongoDB: ${err}`);
  else console.log("MongoDB is now connected");
});

const schema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, "Please check your data, subject is not specified!"],
  },
  year: {
    type: Number,
    required: [true, "Please check your data, year is not specified!"],
  },
  source: {
    type: String,
    required: [true, "Please check your data, source is not specified!"],
  },
});

const sub = mongoose.model("sem1", schema);

const sub1 = new sub({
  subject: "Maths",
  year: 2020,
  source:
    "https://drive.google.com/file/d/1zxnnFyvIeDNYSMrxGl7oS0qCSx5yvNog/view",
});
const sub2 = new sub({
  subject: "Physics",
  year: 2020,
  source:
    "https://drive.google.com/file/d/1zxnnFyvIeDNYSMrxGl7oS0qCSx5yvNog/view",
});
const sub3 = new sub({
  subject: "Chemistry",
  year: 2020,
  source:
    "https://drive.google.com/file/d/1zxnnFyvIeDNYSMrxGl7oS0qCSx5yvNog/view",
});

// sub1.save();
// sub2.save();
// sub3.save();

sub.find((err, allSub) => {
  if (err) console.log(err);
  else {
    allSub.forEach((sub) => {
      console.log(sub.subject);
    });
  }
});
