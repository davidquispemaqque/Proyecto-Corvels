import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import sobreNosotrosImg from '../images/sobre_nosotros.jpg';
import quienesSomosImg from '../images/quienes_somos.jpg';
import misionImg from '../images/mision.jpg';
import visionImg from '../images/vision.jpg';
import '../styles/about.css';
import missionVisionImg from '../images/mission-vision.png';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Container fluid className="about-container">
     <section className="hero-nosotros">
  <div className="image-container position-relative">
    <Image src={sobreNosotrosImg} alt="Sobre Nosotros" className="hero-image" />
    <div className="text-overlay position-absolute top-50 start-50 translate-middle text-white">
      <h1>SOBRE NOSOTROS</h1>
    </div>
  </div>
</section>

      <Container>
        <section className="my-5 quienes-somos-section">
          <Row>
            <Col md={8} className="content">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <h2 className="section-title">¿Quiénes Somos?</h2>
                <p className="section-text">
                  Somos una empresa con más de 20 años en el mercado local y regional. CORVELS S.R.L. es una empresa líder en soluciones integrales para saneamiento ambiental y control de plagas. Ofrecemos servicios de desinfección, desinsectación, desratización, limpieza y desinfección de reservorios y tanques, servicio de trampas de luz e insectocutores, limpieza de ambientes, consultoría y auditoría integral de control de plagas. Trabajamos en diversos sectores como minería, industria alimentaria, construcción, manufactura, universidades, salud, restaurantes, transportes, vivienda, centros comerciales, entidades financieras, colegios, oficinas, turismo y hotelería.
                </p>
                <p className="section-text">
                  Nuestro valor agregado incluye tener licencia de funcionamiento autorizada por DIGESA y cumplir con los requerimientos legales establecidos. Además, utilizamos materiales y productos certificados con hojas de datos de seguridad y contamos con personal capacitado en control de plagas y SSOMAC. Estamos comprometidos con el desarrollo de programas integrales de saneamiento ambiental y la satisfacción total de nuestros clientes.
                </p>
              </motion.div>
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Image src={quienesSomosImg} className="small-image rounded-shadow" fluid />
              </motion.div>
            </Col>
          </Row>
        </section>

        <section className="my-5 mission-vision-section">
        <Row>
          <Col className="text-center">
            <Image src={missionVisionImg} className="full-width-image" fluid />
          </Col>
        </Row>
      </section>
      </Container>
    </Container>
  );
};

export default About;

{/* <section className="my-5">
            <h2>Nuestro portafolio</h2>
            <p>
                Somos una empresa de saneamiento ambiental homologada, nuestro personal cuenta con más de 20 años de experiencia en el trabajo de desinsectación, desratización y desinfección. Trabajamos cumpliendo a cabalidad las normas técnicas y exigencias de calidad y seguridad, pero sobre todo, nos aseguramos de cumplir a plena satisfacción de nuestros clientes.
            </p>
            
            <Row className="mt-4">
                <Col xs={3}>
                    <Image src={portafolioImg} fluid />
                </Col>
                <Col xs={3}>
                    <Image src={portafolioImg} fluid />
                </Col>
                <Col xs={3}>
                    <Image src={portafolioImg} fluid />
                </Col>
                <Col xs={3}>
                    <Image src={portafolioImg} fluid />
                </Col>
            </Row>
        </section> */}