import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <>
    <Header />
      <main>
        <Routes>
          <Route path="/games" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
