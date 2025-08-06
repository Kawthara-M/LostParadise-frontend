import { useEffect } from "react"
import Home from "./components/Home"
import About from "./components/About"
import Header from "./components/Header"
import { Routes, Route, Navigate } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <>

      <Header />

      <main>
        <Routes>
          {/*help by:https://reactrouter.com/api/components/Navigate, didnt know how to use useNavigate*/}
          <Route path="/" element={<Navigate to="/games" replace />} />
          <Route path="/games" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  )
}

export default App
