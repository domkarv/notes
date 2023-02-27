import { useState } from "react";

export default function NewItem(props) {
  const [task, setTask] = useState("");

  const textHandler = (e) => {
    setTask(e.target.value);
  };

  const itemHandler = (e) => {
    e.preventDefault();
    if (task.trim().length !== 0) {
      const newItem = {
        id: Math.floor(Math.random() * 1000),
        task: task,
      };
      props.onAddItem(newItem);
    }
    setTask("");
  };

  return (
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
  );
}
