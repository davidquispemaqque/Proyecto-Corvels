// src/data/services.js
import desratizacionImg from '../images/1.jpg';
import desinfeccionImg from '../images/2.jpg';
import desinsectacionImg from '../images/3.jpg';
import trampasImg from '../images/4.jpg';
import tanquesImg from '../images/5.jpg';
import controlAviarImg from '../images/6.jpg';
import limpiezaAmbientesImg from '../images/7.jpg';

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
    title: 'Trampas de Luz e Insectocutores',
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
