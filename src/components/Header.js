// src/components/Header.js
import React from 'react';
import '../styles/header.css'; // Asegúrate de que esta ruta sea correcta
import defaultImage from '../images/paisaje.jpg'; // Asegúrate de que esta ruta sea correcta

const Header = ({ title, image }) => {
  const backgroundImage = image || defaultImage;

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
    </section>
  );
};

export default Header;
