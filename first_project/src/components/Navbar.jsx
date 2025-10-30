// src/components/Navbar.jsx
import React from "react";

export default function Navbar({ name, setView }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-brand" onClick={() => setView("home")}>
          {name}
        </div>
      </div>
      <div className="nav-right">
        <button className="nav-link" onClick={() => setView("home")}>Home</button>
        <button className="nav-link" onClick={() => setView("projects")}>Projects</button>
        <button className="nav-link" onClick={() => setView("contact")}>Contact</button>
      </div>
    </nav>
  );
}
