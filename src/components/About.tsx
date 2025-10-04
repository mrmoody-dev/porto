// src/components/About.tsx
import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

function About() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section scroll-animation ${
        isVisible ? "is-visible" : ""
      }`}
    >
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
