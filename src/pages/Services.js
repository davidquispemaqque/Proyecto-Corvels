// src/pages/Services.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import services from '../data/services';
import Header from '../components/Header'; // Importa el componente Header
import headerImage from '../images/servicios.jpg'; // Nueva imagen para el encabezado
import '../styles/services.css';

// Componente de Servicios
const Services = () => {
  const whatsappNumber = "51953762677"; // Número de WhatsApp

  return (
    <div className="services-background">
      <div className="header-container">
        <Header image={headerImage} />
        <div className="services-title-container">
          <h1 className="services-titles">Nuestros Servicios</h1>
        </div>
      </div>

      <Container className="mt-5">
        <Row className="g-4">
          {services.map((service) => {
            const whatsappMessage = `Hola, estoy interesado en obtener más información sobre el servicio de ${service.title}. Corvel´s Servicios Generales.`;

            return (
              <Col md={6} lg={4} key={service.id}>
                <div className="service-card">
                  <div className="service-card-image">
                    <img src={service.image} alt={service.title} className="img-fluid" />
                    <div className="service-card-title">
                      <h3><i className={`fas ${service.icon}`}></i> {service.title}</h3>
                    </div>
                    <div className="overlay">
                      <div className="overlay-content">
                        <Link to={`/service/${service.id}`}>
                          <Button variant="primary" className="me-2">Ver más</Button>
                        </Link>
                        <Button
                          variant="success"
                          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                        >
                          Contactar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Sección de Testimonios */}
      <div className="testimonials-section">
        <Container>
          <h2 className="section-title">Testimonios</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="testimonial-card">
                <p>"Excelente servicio, muy profesionales y eficientes."</p>
                <h5>- Juan Pérez</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <p>"Resolvieron nuestro problema de plagas rápidamente. Muy recomendados."</p>
                <h5>- María García</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <p>"La limpieza y desinfección de nuestros tanques de agua fue impecable."</p>
                <h5>- Luis Rodríguez</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <p>"Servicio rápido y efectivo, los recomiendo sin duda."</p>
                <h5>- Ana Martínez</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <p>"El personal fue muy amable y el trabajo fue muy profesional."</p>
                <h5>- Carlos Gómez</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <p>"Nos ayudaron a mantener nuestro espacio libre de plagas de manera muy efectiva."</p>
                <h5>- Beatriz Sánchez</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Sección de Contacto con un Asesor */}
      <div className="advisor-contact-section">
        <Container>
          <h2 className="section-title">Contactar con un Asesor</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="advisor-contact-card">
                <h3>¿Necesitas más información?</h3>
                <p>Nuestros asesores están disponibles para responder todas tus preguntas y ayudarte a encontrar la mejor solución para tus necesidades. Puedes contactarnos a través de WhatsApp haciendo clic en el botón a continuación:</p>
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, necesito más información sobre los servicios de Corvel´s Servicios Generales. Gracias.")}`, '_blank')}
                >
                  Contactar con un Asesor
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
