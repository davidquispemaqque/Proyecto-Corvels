// Desratizacion
import desratizacionHeader from '../images/1.jpg';
import desratizacionImg1 from '../images/desratizacion1.jpg';
import desratizacionImg2 from '../images/desratizacion2.jpg';
import desratizacionImg3 from '../images/desratizacion3.jpg';
import desratizacionImg4 from '../images/desratizacion4.jpg';
import desratizacionImg5 from '../images/desratizacion5.jpg';

// desinfecion
import desinfeccionHeader from '../images/2.jpg';
import desinfeccionImg1 from '../images/Desinfección1.jpg';
import desinfeccionImg2 from '../images/Desinfección2.jpg';
import desinfeccionImg3 from '../images/Desinfección3.jpg';
import desinfeccionImg4 from '../images/Desinfección4.jpg';

// Desinsectación
import desinsectacionHeader from '../images/3.jpg';
import DesinsectacionImg1 from '../images/Desinsectación1.jpg';
import DesinsectacionImg2 from '../images/Desinsectación2.jpg';
import DesinsectacionImg3 from '../images/Desinsectación3.jpg';
import DesinsectacionImg4 from '../images/Desinsectación4.jpg';
import DesinsectacionImg5 from '../images/Desinsectación5.jpg';

// Trampas de Luz
import TrampasHeader from '../images/4.jpg';
import TrampasImg1 from '../images/Trampas1.jpg';
import TrampasImg2 from '../images/Trampas2.jpg';
import TrampasImg3 from '../images/Trampas3.jpg';
import TrampasImg4 from '../images/Trampas4.jpg';

// Limpieza de tanques
import TanquesHeader from '../images/tanqueheader.jpg';
import TanquesImg1 from '../images/Tanques1.jpg';
import TanquesImg2 from '../images/Tanques2.jpg';
import TanquesImg3 from '../images/Tanques3.jpg';
import TanquesImg4 from '../images/Tanques4.jpg';
import TanquesImg5 from '../images/Tanques5.jpg';
import TanquesImg6 from '../images/Tanques6.jpg';

// Control Aviar
import aviarHeader from '../images/palomas.jpg';
import aviarImg1 from '../images/Aviar1.jpg';
import aviarImg2 from '../images/Aviar2.jpg';
import aviarImg3 from '../images/Aviar3.jpg';
import aviarImg4 from '../images/Aviar4.jpg';

// Control Limpieza de Ambiente
import AmbientesHeader from '../images/7.jpg';
import AmbientesImg1 from '../images/Ambientes1.jpg';
import AmbientesImg2 from '../images/Ambientes2.jpg';
import AmbientesImg3 from '../images/Ambientes3.jpg';
import AmbientesImg4 from '../images/Ambientes4.jpg';
import AmbientesImg5 from '../images/Ambientes5.jpg';
import AmbientesImg6 from '../images/Ambientes6.jpg';



const serviceDetails = [
  {
    id: 1,
    title: 'Desratización',
    images: [desratizacionImg1, desratizacionImg2, desratizacionImg3, desratizacionImg4, desratizacionImg5],
    headerImage: desratizacionHeader, // Imagen específica para el encabezado
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
    images: [desinfeccionImg1, desinfeccionImg2, desinfeccionImg3, desinfeccionImg4],
    headerImage: desinfeccionHeader,
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
    images: [DesinsectacionImg1, DesinsectacionImg2, DesinsectacionImg3, DesinsectacionImg4, DesinsectacionImg5],
    headerImage: desinsectacionHeader,
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
    images: [TrampasImg1, TrampasImg2, TrampasImg3, TrampasImg4],
    headerImage: TrampasHeader,
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
    images: [TanquesImg1, TanquesImg2, TanquesImg3, TanquesImg4, TanquesImg5, TanquesImg6],
    headerImage: TanquesHeader,
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
    images: [aviarImg1, aviarImg2, aviarImg3, aviarImg4],
    headerImage: aviarHeader,
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
    images: [AmbientesImg1, AmbientesImg2, AmbientesImg3, AmbientesImg4, AmbientesImg5, AmbientesImg6],
    headerImage: AmbientesHeader,
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
