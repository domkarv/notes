var numbers = [1, 2, 3, 4, 5];

/* Map - Create a new array by doing something with each item in an array */

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers);

// let newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });
// console.log(newNumbers);

const newNumbers = numbers.map((x) => {
  return x * 2;
});
console.log(newNumbers);
