export default function List(props) {
  // const items = [
  //   "Omkar Date 1",
  //   "Omkar Date 2",
  //   "Omkar Date 3",
  //   "Omkar Date 4",
  // ];

  // const items = [
  //   {
  //     id: "1",
  //     task: "Omkar Date 1",
  //   },
  //   {
  //     id: "2",
  //     task: "Omkar Date 2",
  //   },
  //   {
  //     id: "3",
  //     task: "Omkar Date 3",
  //   },
  //   {
  //     id: "4",
  //     task: "Omkar Date 4",
  //   },
  // ];

  // .map method is used to iterate over an array (array of anything)
  return (
    <div>
      <ul className="p-4">
        {props.items.map((item) => {
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
