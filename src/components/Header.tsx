// src/components/Header.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="main-header">
      <Link to="/#beranda">
        <img src={logo} alt="Logo Perusahaan" className="logo-img" />
      </Link>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/#beranda">Beranda</Link>
          </li>
          <li>
            <Link to="/#layanan">Layanan</Link>
          </li>
          <li>
            <Link to="/#tentang">Tentang</Link>
          </li>
          <li>
            <Link to="/#portofolio">Portofolio</Link>
          </li>
          <li>
            <Link to="/#kontak">Kontak</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}

export default Header;
