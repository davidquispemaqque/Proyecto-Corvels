import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLock, FaUserTie, FaUsers } from 'react-icons/fa';
import '../styles/serviceDetail.css';

// Importa las imágenes
import aguaImg from '../images/agua.png';
import luzImg from '../images/luz.png';
import plagaImg from '../images/plaga.jpg';
import plagasImg from '../images/plagas.png';

// Mapea las imágenes a los identificadores
const imageMap = {
  'agua.png': aguaImg,
  'luz.png': luzImg,
  'plaga.jpg': plagaImg,
  'plagas.png': plagasImg,
};

// Definición de los servicios
const services = [
  {
    id: 1,
    title: 'Limpieza y Desinfección de Reservorios de Agua Potable',
    image: 'agua.png',
    description: 'Nuestro servicio está especializado en la eliminación de residuos sólidos en cisternas, tanques elevados y bajos, seguido de una desinfección completa y rigurosa. Este proceso es esencial para garantizar la pureza del agua potable y prevenir enfermedades transmitidas por el agua.',
    points: [
      'Eliminación de residuos sólidos en reservorios:',
      'Realizamos una limpieza exhaustiva y detallada de todos los tipos de reservorios de agua, incluyendo cisternas subterráneas, tanques elevados y tanques bajos. Nuestros técnicos utilizan herramientas y técnicas avanzadas para asegurar la completa eliminación de cualquier residuo sólido acumulado, lo que incluye sedimentos, lodos y cualquier otro tipo de material que pueda afectar la calidad del agua.'
    ],
    detailedProcedure: [
      'Inspección Inicial: Evaluamos el estado del reservorio para identificar el tipo y nivel de contaminación.',
      'Vaciado del Reservorio: Retiramos el agua del reservorio de manera segura y controlada.',
      'Limpieza Física: Eliminamos manualmente los residuos sólidos acumulados utilizando herramientas especializadas.',
      'Lavado: Utilizamos agua a presión para lavar las paredes y el fondo del reservorio, asegurando la eliminación de sedimentos.',
      'Desinfección: Aplicamos productos desinfectantes que eliminan bacterias, virus y otros patógenos.',
      'Enjuague Final: Aseguramos que no queden restos de desinfectante antes de volver a llenar el reservorio.',
      'Revisión y Certificación: Realizamos una inspección final para garantizar que el reservorio esté completamente limpio y desinfectado.'
    ],
    benefits: [
      'Mejora de la calidad del agua: Asegura que el agua potable cumpla con los estándares de salud y seguridad.',
      'Reducción de riesgos sanitarios: Minimiza la posibilidad de brotes de enfermedades transmitidas por el agua.',
      'Mayor durabilidad del reservorio: La limpieza regular puede prolongar la vida útil de las cisternas y tanques.',
      'Tranquilidad para los usuarios: Los usuarios pueden estar seguros de que están consumiendo agua segura y limpia.'
    ],
    whyChooseUs: [
      'Tiempos Cortos: Nos esforzamos por avanzar una gran cantidad de operaciones en periodos cortos de tiempo, por lo que estamos dispuestos a trabajar en proyectos nuevos ahora mismo.',
      'Confidencialidad: Sabemos lo importante que es la protección de la información, por eso establecemos políticas de privacidad en nuestros contratos.',
      'Consultoría Personalizada: Cada compañía tiene necesidades diferentes por eso nos preparamos y capacitamos constantemente en cada una de las áreas de consultoría de nuestros servicios.',
      'Equipo Profesional: Contamos con diversos profesionales especialistas con disposición a brindarle el mejor servicio.'
    ]
  },
  {
    id: 2,
    title: 'Servicio de Trampas de Luz e Insectocutores',
    image: 'luz.png',
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
    image: 'plaga.jpg',
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
    image: 'plagas.png',
    description: 'Ofrecemos servicios especializados en consultoría y auditoría para garantizar un control efectivo y preventivo de plagas en diversos entornos. Nuestros expertos brindan asesoramiento personalizado para mantener los espacios libres de plagas.',
    points: [
      'Asesoramiento especializado en control de plagas.',
      'Auditorías para prevenir infestaciones.',
      'Ambientes protegidos contra plagas dañinas.'
    ]
  }
  // Añadir más servicios según sea necesario
];

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <Container>
     <section className="hero-sectio text-center py-5">
  <h1 className="display-4">{service.title}</h1>
    </section>

  
      <Row>
        <Col md={4}>
          <div id="list-example" className="list-group">
            <a className="list-group-item list-group-item-action" href="#description">Descripción</a>
            <a className="list-group-item list-group-item-action" href="#points">Puntos</a>
            {service.detailedProcedure && <a className="list-group-item list-group-item-action" href="#detailedProcedure">Procedimiento Detallado</a>}
            <a className="list-group-item list-group-item-action" href="#benefits">Beneficios</a>
          </div>
        </Col>
        <Col md={8}>
          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
            <h4 id="description">Descripción</h4>
            <p>{service.description}</p>

            <h4 id="points">Puntos</h4>
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
                <h4 id="detailedProcedure">Procedimiento Detallado</h4>
                <ul className="list-unstyled">
                  {service.detailedProcedure.map((step, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-chevron-right text-primary me-2"></i>{step}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h4 id="benefits">Beneficios</h4>
            {service.benefits && (
              <ul className="list-unstyled">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-award-fill text-warning me-2"></i>{benefit}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Col>
      </Row>

      <h4 id="whyChooseUs" className="mt-5">¿Por qué elegirnos?</h4>
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
