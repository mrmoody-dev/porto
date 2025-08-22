// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./styles/main.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

// Komponen yang menangani gulir
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // Menambah sedikit jeda
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return null;
}

// Komponen Home untuk halaman utama
function Home() {
  return (
    <>
      <div id="beranda">
        <Hero />
      </div>
      <div id="layanan">
        <Features />
      </div>
      <div id="tentang">
        <About />
      </div>
      <div id="portofolio">
        <Gallery />
      </div>
      <div id="kontak">
        <Contact />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
      <ScrollToHash />
    </Router>
  );
}

export default App;
