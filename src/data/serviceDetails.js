import desratizacionImg1 from '../images/paisaje.jpg';
import desratizacionImg2 from '../images/paisaje.jpg';
import desratizacionImg3 from '../images/paisaje.jpg';
import desratizacionImg4 from '../images/paisaje.jpg';

// Importa más imágenes según sea necesario

const serviceDetails = [
  {
    id: 1,
    title: 'Desratización',
    images: [desratizacionImg1, desratizacionImg2, desratizacionImg3, desratizacionImg4],
    description: 'La desratización es un proceso crucial para el control de roedores en diferentes entornos, asegurando un ambiente limpio y seguro.',
    points: [
      'Selección del sitio.',
      'Preparación del terreno.',
      'Colocación del cebadero.',
      'Suministro de alimento.',
      'Monitoreo.',
      'Colocación de señalética.',
      'Mantenimiento (Colocar la fecha del monitoreo en la ficha o aviso de cebadero).'
    ],
    detailedProcedure: [
      'Selección del sitio.',
      'Preparación del terreno.',
      'Colocación del cebadero.',
      'Suministro de alimento.',
      'Monitoreo.',
      'Colocación de señalética.',
      'Mantenimiento (Colocar la fecha del monitoreo en la ficha o aviso de cebadero).'
    ],
    benefits: [
      'Previene enfermedades transmitidas por roedores.',
      'Mantiene el entorno limpio y seguro.',
      'Reduce el daño a la infraestructura.'
    ]
  },
  {
    id: 2,
    title: 'Desinfección',
    images: [],
    description: 'La desinfección elimina los microorganismos patógenos presentes en superficies y ambientes, reduciendo el riesgo de infecciones.',
    points: [
      'Preparación del equipo.',
      'Selección del desinfectante y dilución en agua.',
      'Aplicación uniforme.',
      'Tiempo de acción.',
      'Ventilación del área.'
    ],
    detailedProcedure: [
      'Preparación del equipo.',
      'Selección del desinfectante y dilución en agua.',
      'Aplicación uniforme.',
      'Tiempo de acción.',
      'Ventilación del área.'
    ],
    benefits: [
      'Previene la propagación de enfermedades.',
      'Asegura un ambiente higiénico.',
      'Mejora la calidad del aire.'
    ]
  },
  {
    id: 3,
    title: 'Desinsectación',
    images: [],
    description: 'La desinsectación es el proceso de eliminación de insectos para evitar su proliferación y los problemas de salud que pueden causar.',
    points: [
      'Preparación del equipo.',
      'Preparación del área (cubriendo equipos, papeles o alimentos si es requerido).',
      'Preparación y dilución del insecticida en agua.',
      'Aplicación uniforme.',
      'Tiempo de acción.',
      'Ventilación del área.'
    ],
    detailedProcedure: [
      'Preparación del equipo.',
      'Preparación del área (cubriendo equipos, papeles o alimentos si es requerido).',
      'Preparación y dilución del insecticida en agua.',
      'Aplicación uniforme.',
      'Tiempo de acción.',
      'Ventilación del área.'
    ],
    benefits: [
      'Control de plagas.',
      'Prevención de enfermedades transmitidas por insectos.',
      'Protección de bienes y alimentos.'
    ]
  },
  {
    id: 4,
    title: 'Trampas de Luz e Insectocutores',
    images: [],
    description: 'El mantenimiento de trampas de luz e insectocutores es esencial para la captura y control de insectos voladores.',
    points: [
      'Colocación de la escalera.',
      'Retirar la rejilla o tapa protectora del insectocutor.',
      'Revisión del pegante.',
      'Evaluación (conteo de insectos) y cambio del pegante.',
      'Medición de la intensidad de luz.',
      'Evaluación y determinación de cambio de fluorescente (si es pertinente).',
      'Colocación de la rejilla o tapa del insectocutor.'
    ],
    detailedProcedure: [
      'Colocación de la escalera.',
      'Retirar la rejilla o tapa protectora del insectocutor.',
      'Revisión del pegante.',
      'Evaluación (conteo de insectos) y cambio del pegante.',
      'Medición de la intensidad de luz.',
      'Evaluación y determinación de cambio de fluorescente (si es pertinente).',
      'Colocación de la rejilla o tapa del insectocutor.'
    ],
    benefits: [
      'Control eficaz de insectos voladores.',
      'Reducción de riesgos de salud.',
      'Mantenimiento de un ambiente limpio.'
    ]
  },
  {
    id: 5,
    title: 'Limpieza de Tanques de Agua / Cisternas',
    images: [],
    description: 'La limpieza de tanques de agua y cisternas es vital para asegurar la calidad del agua almacenada.',
    points: [
      'Colocación / fijación de escalera.',
      'Ascenso y/o descenso al interior del tanque.',
      'Limpieza del interior del tanque; remoción de arenilla, sarro o sedimentos.',
      'Aplicación uniforme de desinfectante en el interior del tanque o cisterna de agua.',
      'Descenso y/o ascenso por la escalera.',
      'Desinfección por exteriores.'
    ],
    detailedProcedure: [
      'Colocación / fijación de escalera.',
      'Ascenso y/o descenso al interior del tanque.',
      'Limpieza del interior del tanque; remoción de arenilla, sarro o sedimentos.',
      'Aplicación uniforme de desinfectante en el interior del tanque o cisterna de agua.',
      'Descenso y/o ascenso por la escalera.',
      'Desinfección por exteriores.'
    ],
    benefits: [
      'Mejora la calidad del agua.',
      'Previene enfermedades.',
      'Mantiene el sistema de agua limpio y seguro.'
    ]
  },
  {
    id: 6,
    title: 'Control Aviar',
    images: [],
    description: 'El control aviar implica medidas para evitar la presencia y anidamiento de aves en áreas no deseadas.',
    points: [
      'Colocación de arnés o línea de vida.',
      'Ascenso por escalera telescópica o andamio, siempre enganchando el punto de anclaje.',
      'Aplicación de gel ahuyenta aves en la superficie a tratar.',
      'Corte y colocación de cinta ahuyenta aves en sitios estratégicos.',
      'Descenso enganchado al anclaje.'
    ],
    detailedProcedure: [
      'Colocación de arnés o línea de vida.',
      'Ascenso por escalera telescópica o andamio, siempre enganchando el punto de anclaje.',
      'Aplicación de gel ahuyenta aves en la superficie a tratar.',
      'Corte y colocación de cinta ahuyenta aves en sitios estratégicos.',
      'Descenso enganchado al anclaje.'
    ],
    benefits: [
      'Evita daños a la infraestructura.',
      'Reduce riesgos de salud por excrementos de aves.',
      'Mantiene las áreas limpias y seguras.'
    ]
  },
  {
    id: 7,
    title: 'Limpieza de Ambientes',
    images: [],
    description: 'La limpieza de ambientes implica mantener espacios ordenados y libres de suciedad y desechos.',
    points: [
      'Ventilar el lugar.',
      'Retirar objetos grandes.',
      'Clasificar y desechar lo no útil.',
      'Limpiar polvo y telarañas.',
      'Desinfectar superficies.',
      'Revisar y ordenar lo que se conserva.'
    ],
    detailedProcedure: [
      'Ventilar el lugar.',
      'Retirar objetos grandes.',
      'Clasificar y desechar lo no útil.',
      'Limpiar polvo y telarañas.',
      'Desinfectar superficies.',
      'Revisar y ordenar lo que se conserva.'
    ],
    benefits: [
      'Mejora la salud y el bienestar.',
      'Mantiene un entorno agradable y organizado.',
      'Reduce el riesgo de enfermedades.'
    ]
  }
];

export default serviceDetails;
