import Home from "./pages/Home";
import MobileNav from "./components/MobileNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-white">
        <MobileNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
