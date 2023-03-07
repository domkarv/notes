/* 'await' works only in 'async' functions */

const fun = async () => {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 2000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    }, 5000);
  });

  console.log("Fetching Delhi Weather Please wait ...");
  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather: " + delhiW);

  console.log("Fetching Bangalore Weather Please wait ...");
  let bangaloreW = await bangaloreWeather;
  console.log("Fetched Bangalore Weather: " + bangaloreW);

  return [delhiW, bangaloreW];
};
/* try to run 'fun()' without 'async-await' */
// let data = fun();
// console.log(data);

/* same thing done by two ways */

/* 1st way */
console.log("Welcome to weather control room");
fun().then((data) => {
  console.log(data);
}); // as fun() returns data, that data is passed to the then() method

/* 2nd way */
// const fun2 = async () => {
//   console.log("Welcome to weather control room");
//   let a = await fun();
//   // as fun() returns data, that data is stored in 'a' variable
//   console.log(a);
// };
// fun2();
