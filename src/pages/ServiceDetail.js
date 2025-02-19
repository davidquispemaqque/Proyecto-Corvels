// src/pages/ServiceDetail.js
import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import serviceDetails from '../data/serviceDetails';
import services from '../data/services'; // Importa los servicios desde el archivo de datos
import Header from '../components/Header';
import { FaCheckCircle, FaChevronRight, FaAward, FaClipboardList } from 'react-icons/fa';
import '../styles/serviceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const serviceDetail = serviceDetails.find(s => s.id === parseInt(id));
  const service = services.find(s => s.id === parseInt(id)); // Encuentra el servicio correspondiente para el título

  if (!serviceDetail || !service) {
    return <div>Servicio no encontrado</div>;
  }

  const whatsappNumber = "51953762677";
  const whatsappMessage = `Hola, estoy interesado en obtener más información sobre el servicio de ${service.title}. Corvel´s Servicios Generales.`;
  

  return (
    <Container fluid className="service-detail-container">
      <div className="header-container">
        <Header image={serviceDetail.headerImage} />
        <div className="service-title-container">
          <h1 className="service-titles">Servicios de {service.title}</h1>
        </div>
      </div>

      <Container className="mt-5 service-content">
        <Row>
          <Col md={9}>
            <h1 className="service-title">{serviceDetail.title}</h1>
            <p className="service-description">
              Servicio de {serviceDetail.title.toLowerCase()} y control de plagas, ¿Tiene problemas con roedores en su comunidad, local comercial, edificio o vivienda?
            </p>
            <p>{serviceDetail.description}</p>
            <h4 className="section-title"><FaClipboardList className="section-icon" /> Puntos</h4>
            {serviceDetail.points && (
              <ul className="list-unstyled points-list">
                {serviceDetail.points.map((point, index) => (
                  <li key={index} className="mb-2">
                    <FaCheckCircle className="text-success me-2" />{point}
                  </li>
                ))}
              </ul>
            )}
            {serviceDetail.detailedProcedure && (
              <>
                <h4 className="section-title"><FaChevronRight className="section-icon" /> Procedimiento Detallado</h4>
                <ul className="list-unstyled detailed-procedure-list">
                  {serviceDetail.detailedProcedure.map((step, index) => (
                    <li key={index} className="mb-2">
                      <FaChevronRight className="text-primary me-2" />{step}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h4 className="section-title"><FaAward className="section-icon" /> Beneficios</h4>
            {serviceDetail.benefits && (
              <ul className="list-unstyled benefits-list">
                {serviceDetail.benefits.map((benefit, index) => (
                  <li key={index} className="mb-2">
                    <FaCheckCircle className="text-success me-2" />{benefit}
                  </li>
                ))}
              </ul>
            )}
            <Button
              variant="success"
              className="mb-3 btn-consult"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
            >
              Información sobre este servicio
            </Button>
          </Col>
          <Col md={3} className="service-buttons-col">
            <div className="service-buttons d-flex flex-column">
              {serviceDetails.map(service => (
                <Link to={`/service/${service.id}`} key={service.id}>
                  <Button className="service-button mb-2">{service.title}</Button>
                </Link>
              ))}
            </div>
            <Card className="info-card mt-4">
              <Card.Body>
                <Card.Title>¿Por qué escogernos?</Card.Title>
                <Card.Text>
                  <ul className="list-unstyled">
                    <li><FaCheckCircle className="text-warning me-2" /> Soluciones integrales para saneamiento ambiental.</li>
                    <li><FaCheckCircle className="text-warning me-2" /> Tecnología de punta para una solución efectiva.</li>
                    <li><FaCheckCircle className="text-warning me-2" /> Productos de calidad para garantizar la eliminación de plagas y gérmenes.</li>
                    <li><FaCheckCircle className="text-warning me-2" /> Mejora de procesos y garantía de calidad en la industria alimentaria.</li>
                    <li><FaCheckCircle className="text-warning me-2" /> Utiliza materiales y productos certificados con hojas de datos de seguridad, fichas técnicas y resoluciones directorales vigentes.</li>
                    <li><FaCheckCircle className="text-warning me-2" /> Contamos con un equipo capacitado y competente en control de plagas y SSOMAC.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="portfolio-section mt-4 justify-content-center">
          <h4 id="portfolio" className="section-title">Nuestro Portafolio</h4>
          <Col md={9} className="portfolio-image-container">
            <Carousel>
              {serviceDetail.images.map((image, index) => (
                <Carousel.Item key={index} className="carousel-service">
                  <img src={image} alt={`Slide ${index}`} className="d-block w-100" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ServiceDetail;
