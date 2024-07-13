// src/pages/Specialists.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import specialists from '../data/specialists';
import '../styles/specialists.css'; // Asegúrate de importar el CSS

// Importa las imágenes
import paisajeImg from '../images/persona.jpg';
import imagenImg from '../images/mujer.jpg';
import headerImage from '../images/grupo.jpg'; // Nueva imagen para el encabezado

const Specialists = () => {
  // Mapea las imágenes a los identificadores
  const imageMap = {
    'paisaje.jpg': paisajeImg,
    'imagen.png': imagenImg,
  };

  return (
    <div>
      {/* Encabezado grande */}
      <div className="specialists-header">
        <img src={headerImage} alt="Header" className="header-image" />
        <h1 className="header-title">Nuestros Especialistas</h1>
      </div>

      <Container className="specialists-container">
        <Row>
          {specialists.map((specialist) => (
            <Col key={specialist.id} md={4} className="mb-4">
              <Card className="h-100 text-center specialist-card">
                <div className="card-image-wrapper">
                  <Card.Img variant="top" src={imageMap[specialist.image]} alt={specialist.name} className="card-image" />
                </div>
                <Card.Body>
                  <Card.Title>{specialist.name}</Card.Title>
                  <Card.Text>{specialist.role}</Card.Text>
                  <Card.Text>{specialist.bio}</Card.Text>
                  <Button variant="success" href={`/specialist/${specialist.id}`}>Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Specialists;
