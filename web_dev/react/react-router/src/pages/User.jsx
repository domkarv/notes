import { Link } from "react-router-dom";

export default function User({ user }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Hello, {user?.name}</h1>

      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="mt-3">
        <p className="text-lg">
          <span className="font-semibold">Name:</span> {user?.name}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
      </div>

      <Link
        to={"/"}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold my-8 py-2 px-4 rounded"
      >
        Home
      </Link>
    </div>
  );
}
