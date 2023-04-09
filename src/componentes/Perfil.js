import React, { useState } from 'react';

function BotonCompra() {
  const [comprado, setComprado] = useState(false);

  function handleClick() {
    setComprado(true);
    // Lógica para realizar la compra
  }

  return (
    <button onClick={handleClick}>
      {comprado ? 'Comprado' : 'Comprar'}
    </button>
  );
}