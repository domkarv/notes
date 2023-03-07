var array = [3, 56, 2, 48, 5];

/* ********** Find ********** */
/* Find - find the first item that matches from an array */

const numbers = array.find(function (num) {
  return num > 10;
});
console.log(numbers);

/* ********** FindIndex ********** */
/* FindIndex - find the index of the first item that matches */

const newNumbers = array.findIndex(function (num) {
  return num > 10;
});
console.log(newNumbers);
