import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Gallery = React.lazy(() =>
  waitFor(1000).then(() => import("./components/Gallery"))
);
const YearsPage = React.lazy(() => import("./components/YearsPage"));
const Loader = React.lazy(() => import("./components/HomeLoder/Loader"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/year" element={<YearsPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

function waitFor(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
