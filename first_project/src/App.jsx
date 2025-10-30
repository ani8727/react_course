// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import ProjectDetail from "./components/ProjectDetail";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


export default function App() {
  const name = "Aniket Gupta";
  const profession = "Full Stack Developer";

  const projects = [
    {
      id: "fittrack",
      title: "FitTrack Pro",
      year: 2025,
      short: "Full-stack fitness tracking application (Spring Boot + React + RabbitMQ).",
      long: `Developed a full-stack Fitness Tracking Web App using Java Spring Boot backend and React+Redux 
for the frontend. Integrated Keycloak for auth, RabbitMQ for async communication and RESTful APIs for activity tracking and analytics.`,
      tech: ["Java", "Spring Boot", "React", "Redux", "RabbitMQ", "Keycloak", "MySQL"],
      link: "#"
    },
    {
      id: "metro",
      title: "Metro Route Finder",
      year: 2024,
      short: "C++ CLI metro navigation using Dijkstra's algorithm.",
      long: `Metro navigation system using C++ (STL). Implemented graphs, Dijkstra for shortest path, file-based station data and a menu-driven CLI.`,
      tech: ["C++", "STL", "Algorithms"],
      link: "#"
    },
    {
      id: "signlang",
      title: "Sign Language Prediction",
      year: 2023,
      short: "Real-time sign language detection using CNN and OpenCV.",
      long: `Real-time gesture recognition built with Python, a CNN model and OpenCV for video capture and preprocessing. Used for sign recognition and UI demo.`,
      tech: ["Python", "OpenCV", "CNN"],
      link: "#"
    },
  ];

  // skills from resume

  // app state to show a specific page/component
  const [selectedProject, setSelectedProject] = useState(null);
  const [view, setView] = useState("home"); // "home" | "projects" | "contact" | "projectDetail"

  // click a project -> show detail view
  const openProject = (projectId) => {
    const p = projects.find(pr => pr.id === projectId);
    setSelectedProject(p || null);
    setView("projectDetail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToMain = () => {
    setSelectedProject(null);
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar
        name={name}
        setView={setView}
      />

      {/* HERO */}
      {view !== "projectDetail" && (
        <header className="hero">
          <div className="hero-inner">
            <h1>Hi — I'm <span className="accent">{name}</span></h1>
            <h2 className="muted">{profession}</h2>
            <p className="hero-sub">
              I design scalable backend systems, build intuitive frontends with React, and optimize performance with clean algorithms.
            </p>

            <div className="hero-cta">
              <button onClick={() => setView("projects")} className="btn primary">See Projects</button>
              <button onClick={() => setView("contact")} className="btn outline">Contact Me</button>
            </div>
          </div>
        </header>
      )}

      {/* ABOUT */}
      {view === "home" && (
        <section id="about" className="about-section">
          <div className="container">
            <h2>About</h2>
            <p>
                Final-year Software Engineering student focused on data structures, backend systems (Spring Boot), and modern frontend development with React & Redux.
                Experienced with cloud (AWS), containerization (Docker), and building production-ready REST APIs. (Resume reference).
            </p>
          </div>
        </section>
      )}

      {/* SKILLS */}
      {(view === "home" || view === "projects") && (
        <section id="skills" className="skills-section">
          <div className="container">
            <h2>Skills</h2>
            <Skills skills />
          </div>
        </section>
      )}

      {/* PROJECTS GRID */}
      {(view === "home" || view === "projects") && (
        <section id="projects" className="project-section">
          <div className="container">
            <h2>Selected Projects</h2>
            <div className="projects-grid">
              {projects.map(p => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  onOpen={() => openProject(p.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      {view === "contact" && (
        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Contact</h2>
            <p>Send me a message or an email — I check GitHub and LinkedIn often.</p>
            <ContactForm />
            <div style={{ marginTop: 18 }}>
              <a className="link" href="mailto:aniketgupta.8727@gmail.com">aniketgupta.8727@gmail.com</a>
            </div>
          </div>
        </section>
      )}

      {/* PROJECT DETAIL — rendered inside same app when user clicks a project */}
      {view === "projectDetail" && selectedProject && (
        <section className="project-detail-section">
          <div className="container">
            <ProjectDetail project={selectedProject} onBack={backToMain} />
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
