import { useState } from "react";
import List from "./components/List";
import Nav from "./components/Nav";
import NewItem from "./components/NewItem";

export default function App() {
  const items = [
    {
      id: "1",
      task: "Omkar Date 1",
    },
    {
      id: "2",
      task: "Omkar Date 2",
    },
    {
      id: "3",
      task: "Omkar Date 3",
    },
    {
      id: "4",
      task: "Omkar Date 4",
    },
  ];

  const [state, setState] = useState(items);

  const addItemHandler = (newItem) => {
    // setState(state.concat(newItem));
    /*
    When your state depends on previous state,
    then it's good practice to use the function form of setState.
    */
    // setState((prevState) => {
    //   return prevState.concat(newItem);
    // });
    setState((prevState) => prevState.concat(newItem));
  };

  return (
    <div>
      <Nav />
      <NewItem onAddItem={addItemHandler} />
      <List items={state} />
    </div>
  );
}
