import { Link } from "react-router-dom";

export default function Avatar({ user }) {
  return (
    <Link
      to={"/user"}
      className="rounded-full w-10 h-10 flex items-center justify-center bg-orange-500 text-white cursor-pointer"
    >
      <span className="text-3xl font-bold font-mono select-none">
        {user.name.charAt(0).toUpperCase()}
      </span>
    </Link>
  );
}
