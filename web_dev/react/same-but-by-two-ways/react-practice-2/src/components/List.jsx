import { useState } from "react";

export default function List(props) {
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

  const [task, setTask] = useState("");
  const [state, setState] = useState(items);

  const itemHandler = (e) => {
    e.preventDefault();
    if (task.trim().length !== 0) {
      const newItem = {
        id: Math.floor(Math.random() * 1000).toString(),
        task: task,
      };
      // setState(state.concat(newItem));
      /*
      When your state depends on previous state,
      then it's good practice to use the function form of setState.
      */
      // setState((prevState) => {
      //   return prevState.concat(newItem);
      // });
      setState((prevState) => prevState.concat(newItem));
    }
    setTask("");
  };

  const textHandler = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <div className="px-4 pt-4">
        <form onSubmit={itemHandler}>
          <input
            type="text"
            value={task}
            onChange={textHandler}
            className="border-2 border-black p-2 m-2"
            placeholder="Enter new item"
          />
          <button type="submit" className="border-2 border-black p-2 m-2">
            Add
          </button>
        </form>
      </div>

      <ul className="p-4">
        {state.map((item) => {
          return (
            <li
              key={item.id}
              className="border-2 border-black font-bold p-1 m-2"
            >
              {item.task}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
