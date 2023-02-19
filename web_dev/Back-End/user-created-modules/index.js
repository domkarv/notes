/*
https://youtu.be/-8vI4B60008?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg
*/

/* When only one method is exported */
// const average = require("./mod");
// let avg = average([2, 3, 5, 4, 5]);
// console.log(avg);

/* For more than one methods */
const mod = require("./mod");

let avrg = mod.average([5, 2, 6, 7, 2, 47, 6, 8]);
console.log(avrg);

let sqr = mod.square(4);
console.log(sqr);

let sqrt = mod.sqrt(4);
console.log(sqrt);
