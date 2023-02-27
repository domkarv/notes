import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <Outlet />
      {/* Here all nested routes will be rendered */}
    </div>
  );
}
