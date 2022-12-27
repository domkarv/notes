/* below two lines are same */
function avg(array) {
  // const avg = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum / array.length;
}

const squareOfNum = (num) => {
  return num ** 2;
};

const sqrtOfNum = (num) => {
  return num ** (1 / 2);
};

/* export methods should be at last of all methods */

/* (1) When only one method you have to export */
// module.exports = avg;

/* (2) When more than one method you have to export wrap them in object */
// module.exports = {
//   average: avg,
//   square: squareOfNum,
//   sqrt: sqrtOfNum,
// };

/* You can also do like this, (This is equivalence to step 2) */
// module.exports = {
//   average: (array) => {
//     let sum = 0;
//     array.forEach((element) => {
//       sum += element;
//     });
//     return sum / array.length;
//   },
//   square: (num) => {
//     return num * num;
//   },
//   sqrt: (num) => {
//     return num ** (1 / 2);
//   },
// };

/* This is also equivalence to step 2 */
module.exports.average = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum / array.length;
};
module.exports.square = (num) => {
  return num * num;
};
module.exports.sqrt = (num) => {
  return num ** (1 / 2);
};
