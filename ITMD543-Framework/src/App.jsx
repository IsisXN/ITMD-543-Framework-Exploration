import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Photography from "./pages/Photography"
import About from "./pages/About"
import "./App.css"

export default function App() {
  return (
    <div>

      {/* Navigation */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  )
}
