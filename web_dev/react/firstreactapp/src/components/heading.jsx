import React from "react";

const fName = "Omkar";
const lName = "Date";

const date = new Date();
const time = date.getHours();

let greet = "";
let customeStyles = {
  color: "",
};

if (time < 12) {
  greet = "Good Morning!";
  customeStyles.color = "red";
} else if (time >= 12 && time < 17) {
  greet = "Good Afternoon!";
  customeStyles.color = "blue";
} else if (time >= 17 && time < 20) {
  greet = "Good Evening!";
  customeStyles.color = "green";
} else if (time >= 20) {
  greet = "Good Night!";
  customeStyles.color = "purple";
}

function Heading() {
  return (
    <div>
      <h1>{fName + " " + lName}</h1>
      <h1 style={customeStyles} className="heading">
        {greet}
      </h1>
    </div>
  );
}

export default Heading;
