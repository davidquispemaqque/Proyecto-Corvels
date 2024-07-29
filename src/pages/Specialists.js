// src/pages/Specialists.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import specialists from '../data/specialists';
import Header from '../components/Header'; // Importa el componente Header
import '../styles/specialists.css'; // Asegúrate de importar el CSS

// Importa las imágenes
import davidImg from '../images/team/david.jpg';
import saraiImg from '../images/team/sarai.jpg';
import alejandroImg from '../images/team/alejandro.jpg';
import cleydiImg from '../images/team/Cleydi.jpg';
import jeffersonImg from '../images/team/jefferson.jpg';
import elizImg from '../images/team/eliz.jpg';
import camilaImg from '../images/team/camila.jpg';
import ximenaImg from '../images/team/ximena.jpg';
import luzImg from '../images/team/luz.jpg';
import tamaraImg from '../images/team/tamara.jpg';
import eduardoImg from '../images/team/eduardo.jpg';

import headerImage from '../images/grupo.jpg'; // Nueva imagen para el encabezado

const Specialists = () => {
  // Mapea las imágenes a los identificadores
  const imageMap = {
    'david.jpg': davidImg,
    'sarai.jpg': saraiImg,
    'alejandro.jpg': alejandroImg,
    'Cleydi.jpg': cleydiImg,
    'jefferson.jpg': jeffersonImg,
    'eliz.jpg': elizImg,
    'camila.jpg': camilaImg,
    'ximena.jpg': ximenaImg,
    'luz.jpg': luzImg,
    'tamara.jpg': tamaraImg,
    'eduardo.jpg': eduardoImg,
  };

  return (
    <div>
      <div className="header-container">
        <Header image={headerImage} />
        <div className="specialists-title-container">
          <h1 className="specialists-title">Nuestros Especialistas</h1>
        </div>
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
