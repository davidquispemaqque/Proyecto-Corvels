// src/components/Header.js
import React from 'react';
import '../styles/header.css'; // Asegúrate de que esta ruta sea correcta
import defaultImage from '../images/agua.png'; // Asegúrate de que esta ruta sea correcta

const Header = ({ title, image }) => {
  const backgroundImage = image || defaultImage;

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1 className="header-title">{title}</h1>
    </section>
  );
};

export default Header;
