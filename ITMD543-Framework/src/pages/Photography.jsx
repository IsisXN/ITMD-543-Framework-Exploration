// src/pages/Photography.jsx
import React from "react";
import photo1 from "../assets/images/Media (10).jpg";
import photo2 from "../assets/images/Media (5).jpg";
import photo3 from "../assets/images/Media (7).jpg";
import photo4 from "../assets/images/Media (9).jpg";
import photo5 from "../assets/images/Media (6).jpg";
import photo6 from "../assets/images/Media (8).jpg";

export default function Photography() {
  const photos = [
    { src: photo1, title: "Media (10)" },
    { src: photo2, title: "Media (5)" },
    { src: photo3, title: "Media (7)" },
    { src: photo4, title: "Media (9)" },
    { src: photo5, title: "Media (6)" },
    { src: photo6, title: "Media (8)" },
  ];

  return (
    <div className="page photography-page">
      <h1>Photography</h1>
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
