// src/data/services.js
import aguaImg from '../images/agua.png';
import luzImg from '../images/luz.png';
import plagaImg from '../images/plaga.jpg';
import plagasImg from '../images/plagas.png';

const services = [
  {
    id: 1,
    title: 'Limpieza y Desinfección de Reservorios de Agua Potable',
    image: aguaImg,
    description: 'Este servicio se enfoca en la eliminación de residuos sólidos en cisternas, tanques elevados y bajos, seguido de una desinfección completa.',
    points: [
      '1. Eliminación de residuos sólidos en reservorios.',
      '2. Agua potable segura y libre de contaminantes.',
      '3. Prevención de enfermedades relacionadas con el agua.'
    ]
  },
  {
    id: 2,
    title: 'Servicio de Trampas de Luz e Insectocutores',
    image: luzImg,
    description: 'Nuestro servicio incluye la instalación y monitoreo continuo de trampas de luz e insectocutores para controlar y eliminar insectos presentes en los ambientes.',
    points: [
      '1. Monitoreo constante de insectos.',
      '2. Eliminación efectiva de plagas voladoras.',
      '3. Ambientes más higiénicos y saludables.'
    ]
  },
  {
    id: 3,
    title: 'Limpieza de Ambientes',
    image: plagaImg,
    description: 'A través de un proceso detallado de remoción de agentes contaminantes, garantizamos la limpieza profunda de objetos y espacios utilizando productos especializados. Esto contribuye a mantener un entorno limpio y libre de gérmenes.',
    points: [
      '1. Eliminación de contaminantes ambientales.',
      '2. Espacios más saludables y seguros.',
      '3. Reducción del riesgo de enfermedades transmitidas por superficies.'
    ]
  },
  {
    id: 4,
    title: 'Consultoría y Auditoría Integral de Control de Plagas',
    image: plagasImg,
    description: 'Ofrecemos servicios especializados en consultoría y auditoría para garantizar un control efectivo y preventivo de plagas en diversos entornos. Nuestros expertos brindan asesoramiento personalizado para mantener los espacios libres de plagas.',
    points: [
      '1. Asesoramiento especializado en control de plagas.',
      '2. Auditorías para prevenir infestaciones.',
      '3. Ambientes protegidos contra plagas dañinas.'
    ]
  }
  // Añadir más servicios según sea necesario
];

export default services;
