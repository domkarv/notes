export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-cyan-500 text-white">
      <p className="font-extrabold text-3xl">Omkar Date</p>
      <div className="space-x-4">
        <a href="#" className="font-bold text-xl">
          Home
        </a>
        <a href="#" className="font-bold text-xl">
          About
        </a>
        <a href="#" className="font-bold text-xl">
          Projects
        </a>
        <a href="#" className="font-bold text-xl">
          Contact
        </a>
      </div>
    </nav>
  );
}
