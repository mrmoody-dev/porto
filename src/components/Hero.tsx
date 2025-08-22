// src/components/Hero.jsx
import React from "react";
import heroImage from "./logo.png"; // Ganti dengan gambar yang Anda inginkan
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section-new">
      <div className="hero-content-left">
        <p className="hero-subtitle">Membangun Web Profesional</p>
        <h1 className="hero-title">Solusi Desain & Pengembangan Web</h1>
        <Link to="/#kontak">
          <button className="hero-button">Hubungi Kami</button>
        </Link>
      </div>
      <div className="hero-image-right">
        <img src={heroImage} alt="Hero Section" />
      </div>
    </section>
  );
}

export default Hero;
