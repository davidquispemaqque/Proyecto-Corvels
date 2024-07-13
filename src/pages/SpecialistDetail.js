// src/pages/SpecialistDetail.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import specialists from '../data/specialists';
import '../styles/specialistDetail.css';

// Importa las imágenes
import paisajeImg from '../images/persona.jpg';
import imagenImg from '../images/mujer.jpg';

// Mapea las imágenes a los identificadores
const imageMap = {
  'paisaje.jpg': paisajeImg,
  'imagen.png': imagenImg,
};

const SpecialistDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [specialist, setSpecialist] = useState(null);

  useEffect(() => {
    const selectedSpecialist = specialists.find(s => s.id === parseInt(id));
    setSpecialist(selectedSpecialist);
  }, [id]);

  if (!specialist) {
    return <p>Especialista no encontrado</p>;
  }

  return (
    <Container className="specialist-detail">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="text-section">
            <h2 className="specialist-title">Expertos</h2>
            <h1 className="specialist-role">{specialist.role}</h1>
            <p className="specialist-description">{specialist.bio}</p>
            <h3>Educación</h3>
            <p>{specialist.education}</p>
            <h3>Experiencia</h3>
            <p>{specialist.experience}</p>
            <h3>Habilidades</h3>
            <ul>
              {specialist.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <Button variant="primary" className="me-2" href={specialist.cvLink} target="_blank">Ver CV</Button>
            <Button variant="outline-primary" onClick={() => navigate('/specialists')}>Volver</Button>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <div className="image-wrapper">
            <div className="image-container">
              <img src={imageMap[specialist.image]} alt={specialist.name} className="specialist-image" />
              <div className="background-shape"></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SpecialistDetail;
