// src/components/Gallery.tsx
import React from "react";
import { Link } from "react-router-dom";
import { allProjects } from "../data/projects"; // Impor data dari file terpusat
import useScrollAnimation from "../hooks/useScrollAnimation";

function Gallery() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`gallery-section scroll-animation ${isVisible ? "is-visible" : ""}`}
    >
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
