import { useState, useRef } from "react";

export default function UseReducer() {
  const todoRef = useRef(null);
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const todo = todoRef.current.value;
    if (todo === "") return;
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: todo,
    };
    setTodos([...todos, newTodo]);
    todoRef.current.value = "";
  };

  console.log(todos);

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl font-bold">Todo List</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          ref={todoRef}
          className="mr-2 flex-1 rounded-lg border border-gray-300 px-3 py-2"
        />
        <button
          onClick={handleAddTodo}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-2"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
