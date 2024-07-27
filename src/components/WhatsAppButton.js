import React, { useState } from 'react';
import '../styles/whatsapp.css';
import whatsappIcon from '../images/icono.png'; // Asegúrate de tener este icono en tu carpeta de imágenes

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // Mensaje predeterminado para el chat
  const defaultMessage = "Hola, estoy interesado en obtener más información sobre sus servicios.";

  return (
    <div>
      <div className={`whatsapp-chat ${open ? 'open' : ''}`}>
        <div className="whatsapp-header">
          <span>Corvel´s Servicios Generales</span>
          <button onClick={handleClick} className="close-button">&times;</button>
        </div>
        <div className="whatsapp-body">
          <p>Hola 👋<br />¿En qué podemos ayudarte?</p>
        </div>
        <div className="whatsapp-footer">
          <a href={`https://wa.me/51953762677?text=${encodeURIComponent(defaultMessage)}`} target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-button">Chatea con nosotros</button>
          </a>
        </div>
      </div>
      <button onClick={handleClick} className="whatsapp-float-button">
        <img src={whatsappIcon} alt="WhatsApp" />
      </button>
    </div>
  );
};

export default WhatsAppButton;

