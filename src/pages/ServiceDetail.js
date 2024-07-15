import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLock, FaUserTie, FaUsers } from 'react-icons/fa';
import serviceDetails from '../data/serviceDetails';
import '../styles/serviceDetail.css';
import newImage from '../images/newImage.gif'; 
import { Image } from 'react-bootstrap';
import benefitsImage from '../images/benefits.png'; 


const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails.find(s => s.id === parseInt(id));

  if (!service) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <Container>
      <section className="hero-sectio text-center py-5">
        <h1 className="display-4" >{service.title}</h1>
      </section>

      <Row>
      <Col md={4}>
          <Image src={newImage} fluid className="new-image-gif" /> 
        </Col>
        
        <Col md={8}>
          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
            <h4 id="description" className="desco">Descripción</h4>
            <p>{service.description}</p>

            <h4 id="points" className="desco">Puntos</h4>
            {service.points && (
              <ul className="list-unstyled">
                {service.points.map((point, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{point}
                  </li>
                ))}
              </ul>
            )}

            {service.detailedProcedure && (
              <>
                <h4 id="detailedProcedure" className="desco">Procedimiento Detallado</h4>
                <ul className="list-unstyled">
                  {service.detailedProcedure.map((step, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-chevron-right text-primary me-2"></i>{step}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h4 id="benefits" className="desco">Beneficios</h4>
            {service.benefits && (
              <Image src={benefitsImage} fluid className="benefits-image-class" />
            )}
          </div>
        </Col>
      </Row>

      <h4 id="whyChooseUs" className="desco">¿Por qué elegirnos?</h4>
      {service.whyChooseUs && (
        <Row className="why-choose-us mt-4">
          {service.whyChooseUs.map((reason, index) => (
            <Col md={6} className="mb-4" key={index}>
              <motion.div
                className="d-flex align-items-center p-3 border rounded shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="icon-container">
                  {index === 0 && <FaBriefcase size={40} />}
                  {index === 1 && <FaLock size={40} />}
                  {index === 2 && <FaUserTie size={40} />}
                  {index === 3 && <FaUsers size={40} />}
                </div>
                <div className="ms-3">
                  <h5>{reason.split(':')[0]}</h5>
                  <p>{reason.split(':')[1]}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      )}
      
    </Container>
  );
};

export default ServiceDetail;
