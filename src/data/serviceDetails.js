// Importa las imágenes
import aguaImg from '../images/agua.png';
import luzImg from '../images/luz.png';
import plagaImg from '../images/plaga.jpg';
import plagasImg from '../images/plagas.png';

// Definición de los servicios
const serviceDetails = [
  {
    id: 1,
    title: 'Limpieza y Desinfección de Reservorios de Agua Potable',
    image: aguaImg,
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

export default serviceDetails;
