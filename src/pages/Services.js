import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/services.css';
import { Link } from 'react-router-dom';

// Importa las imágenes
import aguaImg from '../images/agua.png';
import luzImg from '../images/luz.png';
import plagaImg from '../images/plaga.jpg';
import plagasImg from '../images/plagas.png';

// Definición de los servicios
const services = [
  {
    id: 1,
    title: 'Limpieza y Desinfección de Reservorios de Agua Potable',
    image: aguaImg,
    description: 'Este servicio se enfoca en la eliminación de residuos sólidos en cisternas, tanques elevados y bajos, seguido de una desinfección completa.',
    points: [
      'Eliminación de residuos sólidos en reservorios.',
      'Agua potable segura y libre de contaminantes.',
      'Prevención de enfermedades relacionadas con el agua.'
    ]
  },
  {
    id: 2,
    title: 'Servicio de Trampas de Luz e Insectocutores',
    image: luzImg,
    description: 'Nuestro servicio incluye la instalación y monitoreo continuo de trampas de luz e insectocutores para controlar y eliminar insectos presentes en los ambientes.',
    points: [
      'Monitoreo constante de insectos.',
      'Eliminación efectiva de plagas voladoras.',
      'Ambientes más higiénicos y saludables.'
    ]
  },
  {
    id: 3,
    title: 'Limpieza de Ambientes',
    image: plagaImg,
    description: 'A través de un proceso detallado de remoción de agentes contaminantes, garantizamos la limpieza profunda de objetos y espacios utilizando productos especializados. Esto contribuye a mantener un entorno limpio y libre de gérmenes.',
    points: [
      'Eliminación de contaminantes ambientales.',
      'Espacios más saludables y seguros.',
      'Reducción del riesgo de enfermedades transmitidas por superficies.'
    ]
  },
  {
    id: 4,
    title: 'Consultoría y Auditoría Integral de Control de Plagas',
    image: plagasImg,
    description: 'Ofrecemos servicios especializados en consultoría y auditoría para garantizar un control efectivo y preventivo de plagas en diversos entornos. Nuestros expertos brindan asesoramiento personalizado para mantener los espacios libres de plagas.',
    points: [
      'Asesoramiento especializado en control de plagas.',
      'Auditorías para prevenir infestaciones.',
      'Ambientes protegidos contra plagas dañinas.'
    ]
  }
  // Añadir más servicios según sea necesario
];

// Componente de Servicios
const Services = () => {
  return (
    <Container>
      <section className="hero-section text-center py-5">
        <h1 className="display-4">NUESTROS SERVICIOS</h1>
        <p className="lead">Ofrecemos una amplia gama de servicios para satisfacer tus necesidades.</p>
      </section>

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
  );
};

export default Services;
