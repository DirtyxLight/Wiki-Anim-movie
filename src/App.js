import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ghibli from "./pages/Ghibli";
import Disney from "./pages/Disney";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Wiki-Anim-movie/" element={<Home />} />
        <Route path="/ghibli" element={<Ghibli />} />
        <Route path="/disney" element={<Disney />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
