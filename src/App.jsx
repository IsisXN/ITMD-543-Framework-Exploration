// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Photography from "./pages/Photography";
import "./App.css";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar-container">
        <div className="navbar-logo">MyPortfolio</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/photography">Photography</Link>
          <Link to="/about">About Me</Link>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
