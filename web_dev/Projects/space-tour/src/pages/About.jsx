import DesktopNav from "../components/DesktopNav";

export default function About() {
  return (
    <div className="min-h-screen bg-home-mobile min-[385px]:bg-home-tablet md:bg-home-desktop bg-cover">
      <nav className="flex flex-row justify-between items-center p-5 min-[385px]:p-10">
        <img
          src="/src/assets/shared/solar-system.png"
          alt="Logo"
          className="h-16"
        />
        <DesktopNav />
      </nav>
      <div className="flex items-center">
        <h1 className="text-9xl font-bellefair px-8">About</h1>
      </div>
    </div>
  );
}
