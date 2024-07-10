// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contáctanos</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/specialists">Especialistas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
