import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/games" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
