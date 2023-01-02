/**
 * Clock Componen de funcion Ejercicios sesiones 4,5 y 6
 */

import React, { useState, useEffect } from "react";

export default function Clock() {
  const [estado, setEstado] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Lisandro",
    apellido: "Baldoma",
  });

  function tick() {
    setEstado({ ...estado, 
      edad: estado.edad + 1, 
      fecha: new Date() });
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <div>
      <h2>
        Hora Actual:
        {estado.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {estado.nombre} {estado.apellido}
      </h3>
      <h1>Edad:{estado.edad}</h1>
    </div>
  );
}
