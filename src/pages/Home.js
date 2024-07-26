import React from 'react';
import { Container, Row, Col, Button, Card, Image, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import inicio1 from '../images/inicio1.jpg';
import inicio2 from '../images/inicio2.webp';
import inicio3 from '../images/inicio3.webp';
import logo from '../images/logo.png';
import services from '../data/services'; // Importa los servicios desde el archivo services.js
import gifImage from '../images/beneficios.gif';
import VideoCarousel from '../components/VideoCarousel'; 


import logoRecolsa from '../images/logos/iberica.png';
import logoAnotherCompany from '../images/logos/recolsa.png';
import logoPrescott from '../images/logos/presto.png';
import logobode  from '../images/logos/hombre.jpg';
import logoBodegaNajar from '../images/logos/najar.jpg';
import logoservosa from '../images/logos/servosa.jpg';

import arturoGeneral from '../images/dueños/gerente.jpg';
import arturoComercial from '../images/dueños/arturo.jpg';
import joseTecnico from '../images/dueños/jose.jpg';
import juanCarlosOperaciones from '../images/dueños/juan.jpg';


function Home() {
  return (
    <>
      <div className="full-width-carousel">
      <Carousel id="carouselExampleAutoplaying" data-bs-ride="carousel" interval={2000}>
        <Carousel.Item>
          <img src={inicio1} className="d-block w-100" alt="Servicios de Saneamiento" />
          <div className="text-overlay">
            <h1>SERVICIOS DE SANEAMIENTO AMBIENTAL Y CONTROL DE PLAGAS</h1>
            <Link to="/contact">
              <Button variant="success" size="lg">CONTÁCTANOS</Button>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={inicio2} className="d-block w-100" alt="Servicios de Saneamiento" />
          <div className="text-overlay">
            <h1>SERVICIOS DE SANEAMIENTO AMBIENTAL Y CONTROL DE PLAGAS</h1>
            <Link to="/contact">
              <Button variant="success" size="lg">CONTÁCTANOS</Button>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={inicio3} className="d-block w-100" alt="Servicios de Saneamiento" />
          <div className="text-overlay">
            <h1>SERVICIOS DE SANEAMIENTO AMBIENTAL Y CONTROL DE PLAGAS</h1>
            <Link to="/contact">
              <Button variant="success" size="lg">CONTÁCTANOS</Button>
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
      <Container className="mt-5">
        <section className="my-5 who-we-are-section">
          <Row>
            <Col md={8}>
              <h2 className="section-title">¿Quiénes Somos?</h2>
              <p className="section-text">
                Somos una empresa con más de 20 años en el mercado local y regional.
                CORVEL'S S.R.L. es una empresa líder en soluciones integrales para saneamiento ambiental y control de plagas. Ofrecemos servicios de desinfección, desinsectación, desratización, limpieza y desinfección de reservorios y tanques, servicio de trampas de luz e insectocutores, limpieza de ambientes, consultoría y auditoría integral de control de plagas. Trabajamos en diversos sectores como minería, industria alimentaria, construcción, manufactura, universidades, salud, restaurantes, transportes, vivienda, centros comerciales, entidades financieras, colegios, oficinas, turismo y hotelería.
              </p>
            </Col>
            <Col md={4}>
              <Image src={logo} fluid className="who-we-are-image" />
            </Col>
          </Row>
        </section>

        <section className="my-5">
          <Row className="align-items-center">
            <Col style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="services-title">Servicios profesionales que ofrecemos</h2>
              <Link to="/services">
                <Button variant="success" size="lg" className="ml-3 services-button">Ver más</Button>
              </Link>
            </Col>
          </Row>
          <Carousel interval={null}>
            {services.map((service, index) => (
              <Carousel.Item key={service.id}>
                <Row>
                  <Col md={4}>
                    <Card className="mb-4 card-custom">
                      <Card.Img variant="top" src={service.image} className="card-img-top" />
                      <Card.Body className="card-body">
                        <Card.Title className="card-title">{service.title}</Card.Title>
                        <Link to={`/service/${service.id}`}>
                          <Button variant="success" className="services-button services-button-align-right">Ver más</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  {services[index + 1] && (
                    <Col md={4}>
                      <Card className="mb-4 card-custom">
                        <Card.Img variant="top" src={services[index + 1].image} className="card-img-top" />
                        <Card.Body className="card-body">
                          <Card.Title className="card-title">{services[index + 1].title}</Card.Title>
                          <Link to={`/service/${services[index + 1].id}`}>
                            <Button variant="success" className="services-button services-button-align-right">Ver más</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  )}
                  {services[index + 2] && (
                    <Col md={4}>
                      <Card className="mb-4 card-custom">
                        <Card.Img variant="top" src={services[index + 2].image} className="card-img-top" />
                        <Card.Body className="card-body">
                          <Card.Title className="card-title">{services[index + 2].title}</Card.Title>
                          <Link to={`/service/${services[index + 2].id}`}>
                            <Button variant="success" className="services-button services-button-align-right">Ver más</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  )}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>

        <section className="my-5 why-choose-us">
          <Row>
            <Col md={9} className="mx-auto text text-center">
              <h2 className="section-title">¿POR QUÉ ESCOGERNOS?</h2>
              <Image src={gifImage} fluid className="beneficios-gif" />
            </Col>
          </Row>
        </section>

        <section className="my-5 video-carousel-section">
          <Container>
            <Row>
              <Col>
                <h2 className="video-carousel-title">Conoce más de nosotros</h2>
                <VideoCarousel />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="my-5 team-section">
          <Container>
            <Row>
              <Col>
                <h2 className="team-title">Nuestro Equipo</h2>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <div className="team-card">
                  <Image src={arturoGeneral} fluid className="team-image" />
                  <h3 className="team-name">Ing. Arturo Richard Velasco Cano</h3>
                  <h4 className="team-position">Gerente General</h4>
                  <p className="team-description">
                    "Hola, soy Arturo, Gerente General con más de 25 años de experiencia, liderando la innovación y eficiencia en CORVEL'S S.R.L. Mi misión es ofrecer soluciones de saneamiento ambiental de alta calidad."
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="team-card">
                  <Image src={arturoComercial} fluid className="team-image" />
                  <h3 className="team-name">Ing. Arturo Rafael Velasco Yáñez</h3>
                  <h4 className="team-position">Gerente Comercial</h4>
                  <p className="team-description">
                    "Hola, soy Arturo Rafael, Gerente Comercial. Conecto nuestras soluciones con las necesidades de los clientes, promoviendo relaciones sólidas y servicios personalizados en CORVEL'S S.R.L."
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="team-card">
                  <Image src={joseTecnico} fluid className="team-image" />
                  <h3 className="team-name">Ing. José Jesús Velasco Yáñez</h3>
                  <h4 className="team-position">Director Técnico y Jefe SSOMAC</h4>
                  <p className="team-description">
                    "Hola, soy José, Director Técnico y Jefe SSOMAC. Especialista en saneamiento ambiental con estudios en ingeniería, lidero proyectos innovadores y sostenibles en CORVEL'S S.R.L."
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="team-card">
                  <Image src={juanCarlosOperaciones} fluid className="team-image" />
                  <h3 className="team-name">Ing. Juan Carlos Velasco Yáñez</h3>
                  <h4 className="team-position">Jefe de Operaciones</h4>
                  <p className="team-description">
                    "Hola, soy Juan Carlos, Jefe de Operaciones. Aseguro servicios de fumigación y control de plagas seguros y eficaces, con un fuerte compromiso con la calidad y el medio ambiente."
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="my-5">
          <h2 className="text-center">Ellos confían en nuestro servicio</h2>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={6} sm={4} md={2} className="mb-3">
              <Image src={logoRecolsa} fluid />
            </Col>
            <Col xs={6} sm={4} md={2} className="mb-3">
              <Image src={logoAnotherCompany} fluid />
            </Col>
            <Col xs={6} sm={4} md={2} className="mb-3">
              <Image src={logoPrescott} fluid />
            </Col>
            <Col xs={6} sm={4} md={2} className="mb-3">
              <Image src={logobode} fluid />
            </Col>
            <Col xs={6} sm={4} md={2} className="mb-3">
            <Image src={logoBodegaNajar} fluid />
            </Col>
            <Col xs={6} sm={4} md={2} className="mb-3">
            <Image src={logoservosa} fluid />
            </Col>
          </Row>
        </section>
        
      </Container>
    </>
  );
}

export default Home;
