// src/pages/About.js
import React, { useState } from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import sobreNosotrosImg from '../images/sobre_nosotros.jpg';
import quienesSomosImg from '../images/quienes_somos.jpg';
import missionVisionImg from '../images/mission-vision.png';
import headeImage1 from '../images/headeImage1.jpeg';
import headeImage2 from '../images/headeImage2.jpeg';
import headeImage3 from '../images/headeImage3.jpeg';
import headeImage4 from '../images/headeImage4.jpeg';
import headeImage5 from '../images/headeImage5.jpeg';
// Asegúrate de que las miniaturas existan en la carpeta correcta
import thumb1 from '../images/headeImage1.jpeg'; // O usa las mismas imágenes si no tienes miniaturas
import thumb2 from '../images/headeImage2.jpeg';
import thumb3 from '../images/headeImage3.jpeg';
import thumb4 from '../images/headeImage4.jpeg';
import thumb5 from '../images/headeImage5.jpeg';
import Header from '../components/Header';
import '../styles/about.css';

const About = () => {
  const [index, setIndex] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="about-container">
      <Header title="Sobre Nosotros" image={sobreNosotrosImg} />
      <Container>
        <section className="my-5 quienes-somos-section">
          <Row>
            <Col md={8} className="content">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <h2 className="section-ti">¿Quiénes Somos?</h2>
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

        <section className="my-5">
        <h2 className="section-trabajo">NUESTRO TRABAJO</h2>
          <Row>
            <Col>
              <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} slide indicators={false}>
                <Carousel.Item>
                  <Image src={headeImage1} className="d-block w-100" fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={headeImage2} className="d-block w-100" fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={headeImage3} className="d-block w-100" fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={headeImage4} className="d-block w-100" fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={headeImage5} className="d-block w-100" fluid />
                </Carousel.Item>
              </Carousel>
              <div className="thumbnail-container">
                <Image src={thumb1} className="thumbnail" onClick={() => handleSelect(0)} />
                <Image src={thumb2} className="thumbnail" onClick={() => handleSelect(1)} />
                <Image src={thumb3} className="thumbnail" onClick={() => handleSelect(2)} />
                <Image src={thumb4} className="thumbnail" onClick={() => handleSelect(3)} />
                <Image src={thumb5} className="thumbnail" onClick={() => handleSelect(4)} />
              </div>
            </Col>
          </Row>
        </section>

      </Container>
    </Container>
  );
};

export default About;