/**
 * Ejercicios sesiones 10, 11 y 12
 */

import React, { useState } from "react";

const CuadradoComponent = ({ propStyle, mouseEnter, click, blur }) => {
  return (
    <div
      onDoubleClick={click}
      onMouseEnter={mouseEnter}
      onMouseLeave={blur}
      style={propStyle}
    ></div>
  );
};

const Cuadrado = () => {
  const [intervaloColor, setIntervaloColor] = useState(false);

  const [cuadradoStyle, setCuadradoStyle] = useState({
    backgroundColor: "black",
    height: "250px",
    width: "250px",
    marginTop: "40px",
    display: "inline-flex",
  });

  function GenerarColorAleatorio() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
  }

  const onDoubleClick = () => {
    setIntervaloColor(
      setInterval(() => {
        let color = GenerarColorAleatorio();
        setCuadradoStyle({
          ...cuadradoStyle,
          backgroundColor: color,
        });
      }, 250)
    );
  };
  const onMouseEnter = () => {
    clearInterval(intervaloColor);
    setCuadradoStyle({ ...cuadradoStyle, backgroundColor: "black" });
  };
  const onMouseLeave = () => {
    clearInterval(intervaloColor);
    setCuadradoStyle({ ...cuadradoStyle, backgroundColor: "black" });
  };
  let cuadrado;

  cuadrado = (
    <CuadradoComponent
      mouseEnter={onDoubleClick}
      blur={onMouseEnter}
      click={onMouseLeave}
      propStyle={cuadradoStyle}
    ></CuadradoComponent>
  );

  return <div>{cuadrado}</div>;
};

export default Cuadrado;
