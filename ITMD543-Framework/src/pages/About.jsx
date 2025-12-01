// src/pages/About.jsx
import React from "react";
import ResumeImage from "../assets/images/ResumeISIS.png";


export default function About() {
  return (
    <div className="page">
      <h1>About Me</h1>

      {/* Description Sections */}
      <div className="page-description">
        <h2>Personal Background</h2>
        <p>
          My name is Isis Navarro. I am currently pursuing a Bachelor's and Master's simultaneously in Information Technology Management (ITM). 
          I enjoy working on projects that combine creativity and problem-solving, like this portfolio project.
        </p>
      </div>

      <div className="page-description">
        <h2>Photography & Leadership</h2>
        <p>
          I’m passionate about photography and currently serve as president of the Photography Club. As president, I combine my love for photography with leadership, organizing events, mentoring club members, and coordinating headshot sessions. 
          I thrive on helping others explore their creativity and fostering a welcoming community for students to share ideas.
        </p>
      </div>

      <div className="page-description">
        <h2>Campus Involvement</h2>
        <p>
          Beyond photography, I actively participate in campus organizations. I am a member of the PR committee for SHPE, managing communications and promoting events, and I serve as Vice President and PR Chair for ALPFA, coordinating events and outreach efforts. 
          These experiences allow me to collaborate with diverse groups, take on leadership responsibilities, and contribute to making campus life dynamic and inclusive.
        </p>
      </div>

      {/* Resume Snapshot */}
      <div className="page-description">
        <h2>Resume Snapshot</h2>
        <ul>
          <li>Experience with React, Vite, and front-end web development</li>
          <li>Leadership roles in student organizations (ALPFA, SHPE, Photography Club)</li>
          <li>Strong interest in developing intuitive and visually appealing web interfaces</li>
        </ul>
      </div>
    </div>
  );
}
