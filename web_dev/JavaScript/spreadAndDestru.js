var numbers = [3, 56, 2, 48, 5];

/* ********** Spread Operator ********** */
/* Spread Operator - allows an iterable to spread/expand individually inside reciever */

// const newNumbers = [1, 2, ...numbers, 88];
// console.log(newNumbers);

// let newNumbers2 = [1, 2, 3, 4, 5, 6];
// let newNumbers = [...newNumbers2, ...numbers];
// console.log(newNumbers);

// const avg = (a, b, c) => {
//   return (a + b + c) / 3;
// };
// let ans = avg(...numbers);
// console.log(ans);

let obj1 = {
  name: "Max",
  age: 18,
};
let obj2 = {
  job: "developer",
  salary: 50000,
};
let obj3 = { ...obj1, ...obj2, location: "India", name: "Omkar" };
console.log(obj3);

/* ********** Destructuring ********** */
/* Destructuring - ES6 syntactic sugar for extracting values from data stored in objects and arrays */

// let [a, b, c] = numbers;
// console.log(a, b, c);

let { name, age, job, salary, location } = obj3;
console.log(name, age, job, salary, location);
