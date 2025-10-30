// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card" role="article">
      <div className="project-card-inner">
        <h3>{project.title}</h3>
        <p className="project-short">{project.short}</p>
        <div className="tags">
          {project.tech?.slice(0, 4).map((t, i) => <span key={i} className="tag">{t}</span>)}
        </div>
        <div className="card-actions">
          <button className="btn small" onClick={onOpen}>Read details</button>
          <a className="link" href={project.link} target="_blank" rel="noreferrer">Live / Repo</a>
        </div>
      </div>
    </article>
  );
}
