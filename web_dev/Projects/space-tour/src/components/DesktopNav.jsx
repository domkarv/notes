import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <nav className="backdrop-blur-sm">
      <ul className="hidden sm:flex flex-row justify-center items-center gap-16 py-9 px-36 font-barlow tracking-widest uppercase">
        <li className="whitespace-nowrap">
          <Link to="/">
            <span className="font-bold">00</span> Home
          </Link>
        </li>
        <li className="whitespace-nowrap">
          <span className="font-bold">01</span> Celestial Bodies
        </li>
        <li className="whitespace-nowrap">
          <Link to="/about">
            <span className="font-bold">02</span> About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
