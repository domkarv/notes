import React from "react";
// import { add, subtact, multiply, divide } from "./calci";
import * as calci from "./calci";

function List() {
  return (
    <ul>
      <li>React</li>
      <li>JavaScript</li>
      <li>Java</li>
      {/* <li>{add(3, 4)}</li>
      <li>{subtact(7, 3)}</li>
      <li>{multiply(3, 4)}</li>
      <li>{divide(12, 4)}</li> */}
      <li>{calci.add(3, 4)}</li>
      <li>{calci.subtact(7, 3)}</li>
      <li>{calci.multiply(3, 4)}</li>
      <li>{calci.divide(12, 4)}</li>
    </ul>
  );
}

export default List;
