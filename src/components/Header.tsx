// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Header() {
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
    </header>
  );
}

export default Header;
