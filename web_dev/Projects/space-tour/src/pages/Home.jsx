import DesktopNav from "../components/DesktopNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-home-mobile min-[385px]:bg-home-tablet md:bg-home-desktop bg-cover">
      <nav className="flex flex-row justify-between items-center p-5 min-[385px]:p-10">
        <img
          src="/src/assets/shared/solar-system.png"
          alt="Logo"
          draggable="false" // disable drag and drop of images
          className="h-16"
        />
        <DesktopNav />
      </nav>
      <main className="text-center pt-4">
        <p className="leading-10 opacity-70 font-barlow whitespace-nowrap tracking-[4.75px] text-2xl uppercase typewriter">
          So, you want to travel to
        </p>
        <h1 className="text-8xl font-bellefair pt-5 uppercase">Space</h1>
        <p className="pt-8 px-2 opacity-70 font-barlow tracking-widest">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truely out of this world
          experience!
        </p>
      </main>
    </div>
  );
}
