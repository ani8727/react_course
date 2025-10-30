// src/components/Skills.jsx
import React from "react";

  const skills = [
    "React", "Node.js", "Spring Boot", "Java", "C++", "Python",
    "MongoDB", "PostgreSQL", "AWS (EC2/S3)", "Docker", "Git"
  ];


export default function Skills() {
  return (
    <div className="skills-wrap">
      {skills.map((s, i) => (
        <span key={i} className="skill-pill">{s}</span>
      ))}
    </div>
  );
}
