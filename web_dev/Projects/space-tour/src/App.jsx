import Home from "./pages/Home";
import MobileNav from "./components/MobileNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

export default function App() {
  return (
    /* 'selectDisable' is not tailwind class, it's custom class (see index.css) */
    <BrowserRouter>
      <div className="text-white selectDisable">
        <MobileNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
