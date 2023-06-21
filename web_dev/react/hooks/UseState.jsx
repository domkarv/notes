import React, { useState } from "react";

export default function UseState() {
  function getInitialCount() {
    console.log("run function");
    return 5;
  }

  // const [count, setCount] = useState(5);

  const incCount = () => setCount((prev) => prev + 1);
  const decCount = () => setCount((prev) => prev - 1);
  // when new state depends on previous state, always use callback function

  // useState can take a function as an argument
  // const [count, setCount] = useState(() => {
  //   console.log("run function");
  //   return 5;
  // });
  // this callback function will run only once when component is rendered for the first time
  // we can use this to initialize state with some complex logic

  /* Notice here we passed a anonymous function */
  // but we can also pass a named function

  // const [count, setCount] = useState(getInitialCount());
  // if we pass a named function, it will run every time component is rendered
  // so we can't pass it directly, we have to wrap it in a callback function
  // so that it will run only once when component is rendered for the first time
  // Like,
  const [count, setCount] = useState(() => getInitialCount());
  // this is the correct way to pass a named function

  // try this =>
  // const [count, setCount] = useState(() => getInitialCount()); /* 1 */
  // const [count, setCount] = useState(getInitialCount); /* 2 */ // passing function without parenthesis
  // const [count, setCount] = useState(getInitialCount()); /* 3 */ // passing function with parenthesis

  /* 1 and 2 gives same result (but i think both are different) */

  return (
    <div className="flex min-h-screen items-center justify-center gap-4">
      <button
        onClick={decCount}
        className="rounded bg-blue-500 p-4 text-3xl font-bold leading-6 text-white hover:bg-blue-700"
      >
        DEC
      </button>
      <span className="text-3xl font-bold leading-6">{count}</span>
      <button
        onClick={incCount}
        className="rounded bg-blue-500 p-4 text-3xl font-bold leading-6 text-white hover:bg-blue-700"
      >
        INC
      </button>
    </div>
  );
}
