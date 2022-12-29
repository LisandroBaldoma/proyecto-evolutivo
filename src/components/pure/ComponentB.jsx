import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class";

const ComponentB = ({ contact }) => {
  console.log(contact.conectado);
  return (
    <div>
      <h2>Nombre: {contact.nombre}</h2>
      <h3>
        {contact.conectado ? "Contacto en Linea" : "Contacto No Disponible"}
      </h3>
    </div>
  );
};

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contacto),
};

export default ComponentB;
