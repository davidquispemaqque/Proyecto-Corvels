/// src/components/CustomNavbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../images/logo.png'; // Asegúrate de que el logo esté en esta ruta
import '../styles/navbar.css'; // Importa el archivo CSS

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar fixed-top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex align-items-center">
            <img
              src={logo}
              height="40"
              className="d-inline-block align-top logo-img"
              alt="Corvels logo"
            />
            <span className="ml-2 brand-name">CORVEL'S</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio corvels</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>Nosotros corvels</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>Servicios</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contáctanos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/specialists">
              <Nav.Link>Especialistas</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

