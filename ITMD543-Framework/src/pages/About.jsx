// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <p className="page-description">
        I am a student exploring modern web frameworks and technologies. This project is part of
        my learning journey to understand React, routing, and deploying web applications. I enjoy
        coding and building projects that are both functional and visually appealing.
      </p>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <p>My Resume: <a href="#" style={{ color: "#4aa3ff" }}>Download PDF</a></p>
      </div>
    </div>
  );
}
