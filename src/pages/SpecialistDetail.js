// src/pages/SpecialistDetail.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importa los íconos de react-icons
import specialists from '../data/specialists';
import '../styles/specialistDetail.css';

// Importa las imágenes
import personaImg from '../images/team/persona.jpg';
import saraiImg from '../images/team/sarai.jpg';
import camilaImg from '../images/team/camila.jpg';
import cleydiImg from '../images/team/Cleydi.jpg';
import jeffersonImg from '../images/team/jefferson.jpg';
import elizImg from '../images/team/eliz.jpg';
import alejandroImg from '../images/team/alejandro.jpg';
import ximenaImg from '../images/team/ximena.jpg';
import luzImg from '../images/team/luz.jpg';
import tamaraImg from '../images/team/tamara.jpg';
import eduardoImg from '../images/team/eduardo.jpg';

// Mapea las imágenes a los identificadores
const imageMap = {
  'persona.jpg': personaImg,
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
    <div className="specialist-detail-background">
      <Container className="specialist-detail">
        <Row className="align-items-center">
          <Col md={6}>
            <div className="text-section">
              <h2 className="specialist-title">PERFIL PROFESIONAL</h2>
              <h1 className="specialist-role">{specialist.role}</h1>
              <p className="specialist-description">{specialist.bio}</p>
              
              <h3>Experiencia</h3>
              <ul>
                {specialist.experience.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h3>Habilidades</h3>
              <ul>
                {specialist.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h3>Contactos</h3>
              <div className="contact-item">
                <FaEnvelope className="contact-icon contact-icon-email" />
                <p>Correo personal:<br />{specialist.email}</p>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon contact-icon-phone" />
                <p>Celular:<br />{specialist.phone}</p>
              </div>
              <div className="button-container">
                <Button variant="outline-primary" onClick={() => navigate('/specialists')}>Volver</Button>
              </div>
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
    </div>
  );
};

export default SpecialistDetail;
