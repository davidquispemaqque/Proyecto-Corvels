// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../images/logo.png'; // Asegúrate de que la ruta sea correcta
import '../styles/footer.css'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-logo">
            <div className="footer-logo-wrapper">
              <img src={logo} alt="CORVELS Logo" className="footer-logo-img" />
            </div>
            <h5>CORVEL'S</h5>
            <p>Somos una empresa con más de 20 años en el mercado local y regional</p>
          </Col>
          <Col md={4} className="footer-address">
            <p><i className="fas fa-map-marker-alt"></i> Urb. Banco De La Nación, F-25<br /> (Frente al estadio UNSA)<br /> Arequipa - Arequipa</p>
          </Col>
          <Col md={4} className="footer-contact">
            <h5>Contactos:</h5>
            <p>(054) 218888</p>
            <p>953 762 677 - 952 870 388</p>
            <p>corvels.limpieza@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
