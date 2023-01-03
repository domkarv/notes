/* first install 'mongoose' using npm as 'npm install mongoose' */
const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // this is required one search about this later

const mongoDB = "mongodb://127.0.0.1:27017/fruitsDB";
/*
Don't use 'mongodb://localhost:27017/DataBaseName'
Use => "mongodb://127.0.0.1:27017/DataBaseName"
*/
/* mongoose.connect(DataBase_URL); */
mongoose.connect(mongoDB, (err) => {
  if (err) console.log(`Unable to connect to the server: ${err}`);
  else console.log("MongoDB is connected");
});
/*
To connect with mongoDB run command 'mongod' in terminal
and keep it open till you're working on your database.
If you close your mongod terminal then you're not further
connected with your database
*/

// *** Data =>
// ('collection' is like 'table')

/* * Collection: fruits * */
const fruitSchema = new mongoose.Schema({
  // name: Number,
  name: {
    type: String,
    required: [true, "Please check your data, name is not specified!"],
  }, // data validation in mongoose

  // rating: String,
  rating: {
    type: Number,
    min: 1,
    max: 10,
  }, // this says that rating should be of type 'Number' and in between 1-10

  review: String,
}); // this is like blue-print of your data

const Fruit = mongoose.model("FruitCollection", fruitSchema);
/* here we have passed 'FruitCollection' as collectionName,
so mongoDB create collection called 'fruitcollections'*/
/* This is bcoz mongoDB will convert this singular form into plural form and smaller case */
// (if it not in plural form and in smallercase)
/* i.e., 'FruitCollection' will be converted into 'fruitcollections' */
/* Although in our database it is saved as 'fruitcollections'
but in app.js you have access of it by 'Fruit' only 
bcoz it is stored in 'const Fruit' */

const apple = new Fruit({
  name: "Apple",
  rating: 5,
  review: "Apple a day keeps doctor away.",
});

// apple.save(); /* To save data (for one) */
/* after saving data one time comment out this line,
bcoz as many time you run this code that many time same data will saved again and again */

const banana = new Fruit({
  name: "Banana",
  rating: 5,
  review: "Yellow in color.",
});
// banana.save();

/* * Collection: people * */
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema, // forming relation with fruitcollection
});

const Person = mongoose.model("Person", personSchema);
/* Here collection called 'people' is created */
// Bcoz 'people' is plural form of 'Person' and in smaller case.
/* Although in our database it is saved as 'people'
but in app.js you have access of it by 'Person' only 
bcoz it is stored in 'const Person' */

const omkar = new Person({
  name: "Omkar Date",
  age: 19,
  favouriteFruit: apple,
});
// omkar.save();

const om = new Person({
  name: "Om Date",
  age: 17,
});
// om.save();

const aarav = new Person({
  name: "Aarav Gadge",
  age: 6,
});
// aarav.save();

/* save data (for many) */
// Person.insertMany([omkar, om, aarav], (err) => {
//   if (err) console.log(`Insertion error is: ${err}`);
//   else console.log("Successfully inserted all data");
// });
/* after inserting data one time comment out this lines,
bcoz as many time you run this code that many time same data will saved again and again */

// ***
/** * In codition, we have passed only one argument but we can pass more than one * **/
// ***

/* *** Updation methods *** => */
// Person.updateOne(
//   {
//     name: "Omkar Date", // condition
//   },
//   {
//     name: "Omkar", // updation
//   },
//   (err) => {
//     if (err) console.log(`Updation error is: ${err}`);
//     else console.log("Updation successful");
//   }
// );
// Model.updateMany() // => for many
// Model.where().update() // => single update by default
// Model.where().setOptions({ multi: true }).update() // => multi updates

/* Forming connection with fruitcollections */
// Person.updateOne(
//   {
//     name: "Om Date", // condition
//   },
//   {
//     favouriteFruit: banana,
//     // ethe 'favouriteFruit: banana' assign karnayadhi 'banana' object create karava lagla
//     // ani 'saving banana odject' and 'updation process' ekach veli karavi lagli
//     // ethe adhich save kelela 'apple object' assign nahi karta ala
//   },
//   (err) => {
//     if (err) console.log(`Updation error is: ${err}`);
//     else console.log("Updation successful");
//   }
// );

/* *** Deletion methods *** => */
// Person.deleteOne({ name: "Omkar" }, function (err) {
//   if (err) console.log(`Error is: ${err}`);
//   else console.log("Deletion successful");
// });
// Person.deleteMany({ age: { $lt: 16 } }, function (err) {
//   if (err) console.log(`Deletion error is: ${err}`);
//   else console.log("Deletion successful");
// });
// Person.findByIdAndRemove();
// Person.findByIdAndDelete(); // and there are many more like this

/* *** Reading Data *** => */
// 'find()' will give all of your data saved in collection 'people'
Person.find((err, allFruits) => {
  if (err) console.log(`Reading error is: ${err}`);
  else {
    // console.log(allFruits);
    allFruits.forEach((fruit) => {
      console.log(fruit.name);
    });

    // mongoose.connection.close();
    mongoose.connection.close(() => {
      console.log("Mongoose default connection closed.");
    });
    /* this will close the connection from 'mongoose'
    and it always a good practice to close the connection after all action are done
    and this method should be 'in last action/method of project'(not in last line of code).
    Bcoz sometimes, some callback are runnig in background, although
    compiler has reached last line of code */
  }
});
