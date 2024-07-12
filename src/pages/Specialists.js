// src/pages/Specialists.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import specialists from '../data/specialists';

// Importa las imágenes
import paisajeImg from '../images/paisaje.jpg';
import imagenImg from '../images/imagen.png';

const Specialists = () => {
  // Mapea las imágenes a los identificadores
  const imageMap = {
    'paisaje.jpg': paisajeImg,
    'imagen.png': imagenImg,
  };

  return (
    <Container>
      <h1 className="my-5 text-center">Nuestro Equipo</h1>
      <Row>
        {specialists.map((specialist) => (
          <Col key={specialist.id} md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Img variant="top" src={imageMap[specialist.image]} alt={specialist.name} />
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
  );
};

export default Specialists;
