import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import services from '../data/services';
import '../styles/services.css';

// Importa la imagen del encabezado
import headerImage from '../images/plaga.jpg';

// Componente de Servicios
const Services = () => {
  return (
    <div>
      {/* Encabezado grande con imagen */}
      <div className="services-header">
        <img src={headerImage} alt="Nuestros Servicios" className="header-image" />
        <h1 className="header-title">Nuestros Servicios</h1>
      </div>

      <Container>
        {services.map((service) => (
          <section key={service.id} className="service-section my-5">
            <Row className="align-items-center">
              <Col md={6} className="service-image-col">
                <img src={service.image} alt={service.title} className="img-fluid rounded shadow-sm" />
              </Col>
              <Col md={6} className="service-info-col">
                <h3 className="my-3">{service.title}</h3>
                <p>{service.description}</p>
                <ul className="list-unstyled">
                  {service.points.map((point, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>{point}
                    </li>
                  ))}
                </ul>
                <Link to={`/service/${service.id}`}>
                  <Button variant="success" className="mt-3">Ver más</Button>
                </Link>
              </Col>
            </Row>
          </section>
        ))}
      </Container>
    </div>
  );
};

export default Services;
