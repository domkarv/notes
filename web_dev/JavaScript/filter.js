var numbers = [3, 56, 2, 48, 5];

/* Filter - Create a new array by keeping the items that return true. */

// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

const newNumbers = numbers.filter((num) => {
  return num < 10;
});
console.log(newNumbers);
