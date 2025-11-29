// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">MyPortfolio</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
