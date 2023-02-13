import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <nav className="sm:hidden">
      <img
        src="/src/assets/shared/icon-hamburger.svg"
        alt="Logo"
        className="sm:hidden min-[385px]:m-12 float-right m-8 hamburger"
        onClick={navBar}
      />
      <div className="hidden vertical-nav min-h-screen w-[65%] absolute right-0 top-0 backdrop-blur-3xl z-10">
        <img
          src="/src/assets/shared/icon-close.svg"
          alt="Logo"
          className="float-right p-8 min-[385px]:p-12 closed-hamburger"
        />
        <ul className="flex flex-col justify-center gap-3 h-full relative top-24 px-8 font-barlow tracking-widest uppercase">
          <li className="whitespace-nowrap p-2">
            <Link to="/">
              <span className="font-bold">00</span> Home
            </Link>
          </li>
          <li className="whitespace-nowrap p-2">
            {/* <Link to="/celestialbody"> */}
            <span className="font-bold">01</span> Celestial Bodies
            {/* </Link> */}
          </li>
          <li className="whitespace-nowrap p-2">
            <Link to="/about">
              <span className="font-bold">02</span> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function navBar() {
  const nav = document.querySelector(".vertical-nav");
  const hamburger = document.querySelector(".hamburger");
  const closedHamburger = document.querySelector(".closed-hamburger");

  if (nav.style.display === "none" || nav.style.display === "") {
    hamburger.addEventListener("click", () => {
      nav.style.display = "block";
      hamburger.style.display = "none";
    });
  }

  if (nav.style.display === "block") {
    closedHamburger.addEventListener("click", () => {
      nav.style.display = "none";
      hamburger.style.display = "block";
    });
  }
}
