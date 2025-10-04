// src/components/Features.tsx
import React from "react";
import { Link } from "react-router-dom";
import { allFeatures } from "../data/features"; // Impor data dari file terpusat
import useScrollAnimation from "../hooks/useScrollAnimation";

// Ganti dengan gambar yang sesuai untuk setiap kolom

function Features() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`features-section scroll-animation ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <h2 className="features-title">Layanan Kami</h2>
      <div className="features-grid">
        {allFeatures.map((item) => (
          <div key={item.id} className="feature-card">
            <img src={item.icon} alt={item.title} className="feature-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
