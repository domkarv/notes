import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function Nav({ user }) {
  // console.log(user);
  return (
    <nav className="bg-gray-800 mx-auto px-2 flex items-center justify-between h-16">
      <div className="flex items-center gap-5">
        <Link
          to={"/"}
          className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to={"/products"}
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Products
        </Link>
        <Link
          to={"/about"}
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          About
        </Link>
        <Link
          to={"/document"}
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Document
        </Link>
      </div>

      {user === null ? (
        <Link
          to={"/login"}
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Login
        </Link>
      ) : (
        <Avatar user={user} />
      )}
    </nav>
  );
}

/* Also learn about 'NavLink' Components in react-router-dom */
