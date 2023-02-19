import allsub from "../../server/index.js";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Omkar Date</h1>
      {allsub.map((sub) => (
        <a href={sub.source}>{sub.subject}</a>
      ))}
    </div>
  );
}
