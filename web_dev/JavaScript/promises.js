const fs = require("fs/promises");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.readFile("file.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toJSON());
//     // console.log(data.toString());
//   }
// });

// const file = fs.readFile("file.txt", "utf-8");
// // console.log(file);
// file.then((data) => {
//   console.log(data);
// });
// console.log("This is the end of the file");

// fs.readFile("file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .then(() => console.log("This is the end of the file"));

fs.readFile("file.txt", "utf-8")
  .then((data) => {
    return data + "\nThis is the end of first then";
  })
  .then((data) => {
    console.log(data + " and sencond then");
  });
