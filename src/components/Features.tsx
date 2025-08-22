// src/components/Features.jsx
import React from "react";
import { Link } from "react-router-dom";
import { allFeatures } from "../data/features"; // Impor data dari file terpusat

// Ganti dengan gambar yang sesuai untuk setiap kolom

function Features() {
  return (
    <section className="features-section">
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
