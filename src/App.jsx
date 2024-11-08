import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chapter1 from "./utlis/pages/Chapter1";
import Chapter2 from "./utlis/pages/Chapter2";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter basename="/testing">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/chapter/1" element={<Chapter1 />} />
        <Route path="/chapter/2" element={<Chapter2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
