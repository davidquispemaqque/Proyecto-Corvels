import React from 'react';
import { Container, Row, Col, Button, Card, Image, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import inicio1 from '../images/inicio1.jpg';
import inicio2 from '../images/inicio2.webp';
import inicio3 from '../images/inicio3.webp';
import logo from '../images/logo.png';
import agua from '../images/agua.png';
import ambiente from '../images/ambiente.jpg';
import luz from '../images/luz.png';
import gifImage from '../images/beneficios.gif';
import VideoCarousel from '../components/VideoCarousel'; // Asegúrate de que la ruta es correcta

function Home() {
  return (
    <>
      <div className="full-width-carousel">
        <Carousel id="carouselExampleAutoplaying" data-bs-ride="carousel" interval={1000}>
          <Carousel.Item className="carousel-item active">
            <img src={inicio1} className="d-block w-100" alt="Servicios de Saneamiento" />
            <div className="text-overlay">
              <h1>SERVICIOS DE SANEAMIENTO AMBIENTAL Y CONTROL DE PLAGAS</h1>
              <Link to="/contact">
                <Button variant="success" size="lg">CONTÁCTANOS</Button>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img src={inicio2} className="d-block w-100" alt="Servicios de Saneamiento" />
            <div className="text-overlay">
              <h1>SERVICIOS DE SANEAMIENTO AMBIENTAL Y CONTROL DE PLAGAS</h1>
              <Link to="/contact">
                <Button variant="success" size="lg">CONTÁCTANOS</Button>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
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
          <Row>
            <Col md={4}>
              <Card className="mb-4 card-custom">
                <Card.Img variant="top" src={luz} className="card-img-top" />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">Servicio de Trampas de Luz</Card.Title>
                  <Link to="/service/2">
                    <Button variant="success" className="services-button services-button-align-right">Ver más</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 card-custom">
                <Card.Img variant="top" src={agua} className="card-img-top" />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">Limpieza y desinfección de pozos de agua</Card.Title>
                  <Link to="/service/1">
                    <Button variant="success" className="services-button services-button-align-right">Ver más</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 card-custom">
                <Card.Img variant="top" src={ambiente} className="card-img-top" />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">Limpieza de Ambientes</Card.Title>
                  <Link to="/service/3">
                    <Button variant="success" className="services-button services-button-align-right">Ver más</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="my-5 why-choose-us">
          <Row>
            <Col md={9} className="mx-auto text text-center">
              <h2 className="section-title">¿POR QUÉ ESCOGERNOS?</h2>
              <Image src={gifImage} fluid className="beneficios-gif" />
            </Col>
          </Row>
        </section>

        {/* Agrega el componente VideoCarousel aquí */}
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
              <Col md={4}>
                <div className="team-card">
                  <Image src="https://i.pinimg.com/564x/3e/b6/46/3eb646a40aed7887a36bc387b3bb9710.jpg" fluid className="team-image" />
                  <h3 className="team-name">Ing. ....</h3>
                  <h4 className="team-position">Gerente General</h4>
                  <p className="team-description">
                    ¡Hola! ingeniero inscrito en el MINAM como responsable técnico. Cuento con más de 5 años de experiencia en manejo y gestión de residuos sólidos. Asesoro EORS que trabajan en industria y minería: Cerro Verde, Southern Perú, Las Bambas, Shougang Perú, Ares, etc.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="team-card">
                  <Image src="https://i.pinimg.com/564x/81/ac/9e/81ac9ef6456e8eccbf651fc368e83e4a.jpg" fluid className="team-image" />
                  <h3 className="team-name">Abg..... </h3>
                  <h4 className="team-position">Abogada Ambiental</h4>
                  <p className="team-description">
                    Asesora legal en derecho ambiental, con maestría en Derecho Medioambiental, cuento con más de 6 años asesorando empresas consultoras ambientales, empresas titulares de proyectos de inversión extractivos y productivos, EORS, empresas remediadoras ambientales y empresas contratistas con el Estado.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="team-card">
                  <Image src="https://i.pinimg.com/564x/5a/92/2d/5a922d25842c134281e18ad7c794f660.jpg" fluid className="team-image" />
                  <h3 className="team-name">Ing..... </h3>
                  <h4 className="team-position">Especialista en SIG</h4>
                  <p className="team-description">
                    ¡Hola!, con Maestría en Medio Ambiente y Sistemas Integrados de Gestión. Especialista en actividades de Alto Riesgo según la Administración de Seguridad y Salud Ocupacional. Especialización en Seguridad y Prevención de Riesgos Industriales. 
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
      </Container>
    </>
  );
}

export default Home;
