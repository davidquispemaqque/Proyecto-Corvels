// src/pages/About.js
import React, { useState } from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import sobreNosotrosImg from '../images/nosotros.jpg';
import quienesSomosImg from '../images/quienes_somos.jpg';
import missionVisionImg from '../images/mission-vision.png';
import headeImage1 from '../images/headeImage1.jpeg';
import headeImage2 from '../images/headeImage2.jpeg';
import headeImage3 from '../images/headeImage3.jpeg';
import headeImage4 from '../images/headeImage4.jpeg';
import headeImage5 from '../images/headeImage5.jpeg';
// import headeImage6 from '../images/Ambientes1.jpg';
// import headeImage7 from '../images/Ambientes2.jpg';

// Asegúrate de que las miniaturas existan en la carpeta correcta
import thumb1 from '../images/headeImage1.jpeg'; // O usa las mismas imágenes si no tienes miniaturas
import thumb2 from '../images/headeImage2.jpeg';
import thumb3 from '../images/headeImage3.jpeg';
import thumb4 from '../images/headeImage4.jpeg';
import thumb5 from '../images/headeImage5.jpeg';
// import thumb6 from '../images/headeImage6.jpg';
// import thumb7 from '../images/headeImage7.jpg';

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
                <Image src={quienesSomosImg} className="small-somos" fluid />
              </motion.div>
            </Col>
          </Row>
        </section>

        <section className="my-5 mission-vision-section">
      <Row>
        <Col md={4} className="text-center">
          <Image src={missionVisionImg} className="full-width-image" fluid />
        </Col>
        <Col md={8}>
          <h2 className="mission-title">Misión</h2>
          <p className="mission-text">
            Ser una empresa dedicada al asesoramiento, venta, saneamiento ambiental y limpieza, con el propósito de brindar satisfacción al cliente antes, durante y después de la ejecución de nuestros servicios. Nos caracterizamos por trabajar con los mejores estándares de calidad física, ambiental y laboral dentro de los plazos establecidos y comprometidos por formar sólidas y duraderas relaciones con nuestros clientes y socios.
          </p>
          <h2 className="vision-title">Visión</h2>
          <p className="vision-text">
            Ser un referente en el rubro de servicios y ventas, estando posicionados como una de las mejores empresas del rubro a nivel local y con proyecciones a nivel nacional. Asimismo, lograr la plena satisfacción de nuestro equipo de colaboradores y clientes, fomentando el trabajo en equipo, diversificación del servicio y compromiso para la creación de valor social.
          </p>
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
                {/* <Carousel.Item>
                  <Image src={headeImage6} className="d-block w-100" fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={headeImage7} className="d-block w-100" fluid />
                </Carousel.Item> */}
                
              </Carousel>
              <div className="thumbnail-container">
                <Image src={thumb1} className="thumbnail" onClick={() => handleSelect(0)} />
                <Image src={thumb2} className="thumbnail" onClick={() => handleSelect(1)} />
                <Image src={thumb3} className="thumbnail" onClick={() => handleSelect(2)} />
                <Image src={thumb4} className="thumbnail" onClick={() => handleSelect(3)} />
                <Image src={thumb5} className="thumbnail" onClick={() => handleSelect(4)} />
                {/* <Image src={thumb6} className="thumbnail" onClick={() => handleSelect(5)} />
                <Image src={thumb7} className="thumbnail" onClick={() => handleSelect(6)} /> */}
              </div>
            </Col>
          </Row>
        </section>

      </Container>
    </Container>
  );
};

export default About;