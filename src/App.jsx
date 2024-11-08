import React from "react";
import { Routes, Route } from "react-router-dom";
import Chapter1 from "./utlis/pages/Chapter1";
import Chapter2 from "./utlis/pages/Chapter2";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/testing/" element={<Layout />} />
        <Route path="/testing/chapter/1" element={<Chapter1 />} />
        <Route path="/testing/chapter/2" element={<Chapter2 />} />
      </Routes>
    </>
  );
};

export default App;