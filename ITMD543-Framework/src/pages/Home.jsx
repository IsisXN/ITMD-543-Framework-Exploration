// src/pages/Home.jsx
import React from "react";
import placeholderPhoto from "../assets/images/placeholder.jpg"; // replace with your photo

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome</h1>
      <p className="page-description">
        Hello! This site showcases my project using React and Vite. You can view my photography
        from trips this summer, learn more about me, and see examples of my work. I faced some
        challenges along the way, but I learned a lot about setting up React, routing, and styling.
      </p>
      <div style={{textAlign: "center", marginTop: "30px"}}>
        <img
          src={placeholderPhoto}
          alt="Placeholder"
          style={{ maxWidth: "300px", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}
