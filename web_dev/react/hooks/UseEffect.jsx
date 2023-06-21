import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function UseEffect() {
  const [resourceType, setResourceType] = useState("null");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  function handleClick(e) {
    setLoading(true);
    setResourceType(e.target.value);
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchResource() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${resourceType}/1`,
          { signal }
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          throw error;
        }
      }
    }

    fetchResource();

    // always write a cleanup function
    return () => {
      abortController.abort();
    }; // this return considered as cleanup function
    // this cleanup function will be called before the next useEffect
    // or before the component is removed from the DOM
    // basically this cleans up the previous useEffect
  }, [resourceType]);

  return (
    <>
      <div className="m-4 flex items-start gap-4">
        <button
          value={"posts"}
          onClick={handleClick}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Posts
        </button>
        <button
          value={"users"}
          onClick={handleClick}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Users
        </button>
        <button
          value={"comments"}
          onClick={handleClick}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Comments
        </button>
      </div>
      <div className="m-4 font-bold">
        <h1 className="text-3xl">{resourceType}</h1>
        <p className="mt-4 text-sm">
          {loading ? <Loader /> : JSON.stringify(data)}
        </p>
      </div>
    </>
  );
}
