export default function List(props) {
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
