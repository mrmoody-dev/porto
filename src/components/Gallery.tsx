// src/components/Gallery.jsx
import React from "react";
import { Link } from "react-router-dom";
import { allProjects } from "../data/projects"; // Impor data dari file terpusat

function Gallery() {
  return (
    <section id="portfolio" className="gallery-section">
      <h2>Portofolio Kami</h2>
      <div className="gallery-grid">
        {allProjects.map((project) => (
          <div key={project.id} className="gallery-item">
            <img src={project.image} alt={project.title} />
            <div className="gallery-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}`} className="project-link">
                Lihat Proyek
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
