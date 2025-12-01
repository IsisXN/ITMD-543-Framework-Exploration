// src/pages/Photography.jsx
import React from "react";
import photo1 from "../assets/images/Media (10).jpg";
import photo2 from "../assets/images/Media (5).jpg";
import photo3 from "../assets/images/Media (7).jpg";
import photo4 from "../assets/images/Media (11).jpg";
import photo5 from "../assets/images/Media (6).jpg";
import photo6 from "../assets/images/Media (8).jpg";

export default function Photography() {
  const photos = [
    { src: photo1, title: "China - Great Wall" },
    { src: photo2, title: "Spain - Sagrada Família" },
    { src: photo3, title: "Italy - Lake Como" },
    { src: photo4, title: "China - Forbidden City" },
    { src: photo5, title: "Italy - Milan" },
    { src: photo6, title: "Italy - Como Villa" },
  ];

  return (
    <div className="page photography-page">
      <h1>Photography</h1>
      <p className="page-description">
        This page showcases photography from my summer travels to Spain, Italy, and China.
        Here you can see some of the places I visited and the moments I captured.
      </p>
      <div className="gallery">
        {photos.map((p, index) => (
          <div className="gallery-item" key={index}>
            <img src={p.src} alt={p.title} />
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
