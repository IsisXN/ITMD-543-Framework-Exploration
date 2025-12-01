// src/pages/Home.jsx
import React from "react";
import MainPhoto from "../assets/images/Media9.jpg"; // Your main photo

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Portfolio</h1>

      {/* Intro Section */}
      <div className="page-description">
        <h2>About This Portfolio</h2>
        <p>
          This project showcases my learning experience with React and Vite as I created my own portfolio website. 
          My goal was to design a clean, functional interface with multiple pages, routing, hover effects, and organized components.
        </p>
      </div>

      {/* Main Photo */}
      <div className="page-description" style={{ textAlign: "center" }}>
        <h2>Featured Photo</h2>
        <img 
          src={MainPhoto} 
          alt="Portfolio Main" 
          className="home-photo"
          style={{ 
            maxWidth: "450px",
            width: "90%",
            height: "auto",       // ← prevents stretching
            objectFit: "contain", // ← keeps original proportions
            borderRadius: "12px",
            marginTop: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
          }}
        />
      </div>

      {/* Additional Info */}
      <div className="page-description">
        <h2>What This Site Represents</h2>
        <p>
          This portfolio reflects my creativity and growth in front-end development. By building out the Home, Photography, and About pages, 
          I learned how to structure a project, manage components, and style pages consistently. It also allowed me to combine my technical skills 
          with my passion for photography. During development, I encountered challenges like setting up React Router, importing images correctly, and implementing hover effects for the gallery. 
          Despite some issues, this project helped me understand front-end structure, component organization, and styling techniques.
        </p>
      </div>
    </div>
  );
}
