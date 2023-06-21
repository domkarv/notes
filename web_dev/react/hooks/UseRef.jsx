import { useState, useRef } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(false);
  const inputRef = useRef();

  console.count("App Called");

  const person = {
    name,
    selected,
    age: 0,
    city: "",
  };

  function handleAdd() {
    const value = inputRef.current.value;
    if (value === "") return;
    setName(value);
    inputRef.current.value = "";
  }

  function handleSelect() {
    setSelected(true);
  }

  return (
    <div className="m-8 flex flex-col items-center gap-4 text-3xl">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Text"
        className="w-96 rounded-lg border-2 border-black p-2"
      />
      <button
        onClick={handleAdd}
        className="w-40 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Add
      </button>
      <button
        onClick={handleSelect}
        className="w-40 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Select
      </button>
      {JSON.stringify(person)}
    </div>
  );
}
