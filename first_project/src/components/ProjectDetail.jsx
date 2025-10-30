// src/components/ProjectDetail.jsx
import React from "react";

export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="project-detail">
      <button className="btn back" onClick={onBack}>← Back</button>
      <h2>{project.title} <span className="muted">({project.year})</span></h2>
      <p className="lead">{project.long}</p>

      <div className="detail-meta">
        <strong>Tech stack:</strong>
        <div className="tags">
          {project.tech?.map((t, idx) => <span key={idx} className="tag">{t}</span>)}
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <a className="btn primary" href={project.link} target="_blank" rel="noreferrer">Open Project</a>
      </div>
    </div>
  );
}
