// src/data/services.js
import desratizacionImg from '../images/agua.png';
import desinfeccionImg from '../images/agua.png';
import desinsectacionImg from '../images/agua.png';
import trampasImg from '../images/agua.png';
import tanquesImg from '../images/agua.png';
import controlAviarImg from '../images/agua.png';
import limpiezaAmbientesImg from '../images/agua.png';

const services = [
  {
    id: 1,
    title: 'Desratización',
    image: desratizacionImg,
    icon: 'fa-brands fa-waze' // Icono de Font Awesome
  },
  {
    id: 2,
    title: 'Desinfección',
    image: desinfeccionImg,
    icon: 'fa-pump-medical' // Icono de Font Awesome
  },
  {
    id: 3,
    title: 'Desinsectación',
    image: desinsectacionImg,
    icon: 'fa-bug' // Icono de Font Awesome
  },
  {
    id: 4,
    title: 'Servicio de Trampas de Luz e Insectocutores',
    image: trampasImg,
    icon: 'fa-lightbulb' // Icono de Font Awesome
  },
  {
    id: 5,
    title: 'Limpieza de Tanques de Agua / Cisternas',
    image: tanquesImg,
    icon: 'fa-water' // Icono de Font Awesome
  },
  {
    id: 6,
    title: 'Control Aviar',
    image: controlAviarImg,
    icon: 'fa-dove' // Icono de Font Awesome
  },
  {
    id: 7,
    title: 'Limpieza de Ambientes',
    image: limpiezaAmbientesImg,
    icon: 'fa-broom' // Icono de Font Awesome
  }
];

export default services;
