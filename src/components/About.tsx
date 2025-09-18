// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>Tentang Saya</h2>
        <p>
          Halo! Saya adalah seorang developer.
        </p>
        <p>
          Saya percaya setiap karya seni memiliki cerita, dan saya berkomitmen
          untuk menciptakan karya yang tidak hanya indah secara visual, tetapi
          juga memiliki makna mendalam.
        </p>
        {/* Anda bisa menambahkan informasi lain di sini, seperti keahlian atau hobi. */}
      </div>
    </section>
  );
}

export default About;
