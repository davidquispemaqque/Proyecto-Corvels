// src/pages/Services.js
import React, { useState } from 'react';

function Services() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h1>Servicios</h1>
      <p>Descripción de servicios principales.</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Ver Menos' : 'Ver Más'}
      </button>
      {showMore && (
        <div>
          <p>Información adicional sobre servicios.</p>
        </div>
      )}
    </div>
  );
}

export default Services;
