import { Outlet } from "react-router-dom";

export default function Home({ user }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Hello{user && `, ${user.name}`}
      </h1>

      <Outlet />
      {/* Here all nested routes will be rendered */}
    </div>
  );
}
