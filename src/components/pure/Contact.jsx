/**
 * Ejercicios Sesion 7,8 y 9.
 */

// Componente Hijo-Puro encargado de pintar y ejecutar lo que esta en el componente padre < ContactList />

import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class";
import Badge from "react-bootstrap/Badge";
import { ToggleOn, ToggleOff, Trash } from "react-bootstrap-icons";
import { ESTADO } from "../../models/estados.enum";

const Contact = ({ contact, conectado, deleted }) => {
  function estadoBagde() {
    if (contact.conectado) {
      return (
        <Badge pill bg="success">
          {ESTADO.ONLINE}
        </Badge>
      );
    } else {
      return (
        <Badge pill bg="danger">
          {ESTADO.OFFLINE}
        </Badge>
      );
    }
  }
  function accionIcon() {
    if (contact.conectado) {
      return <ToggleOn className= "accion" color="royalblue" onClick={() => conectado(contact)} />;
    } else {
      return <ToggleOff className= "accion" color="royalblue" onClick={() => conectado(contact)} />;
    }
  }

  return (
    <tr>
      <th>{contact.nombre}</th>
      <th>{contact.apellido}</th>
      <th>{contact.email}</th>
      <th>{estadoBagde()}</th>
      <th>
        {accionIcon()} <Trash className= "accion" color="red" onClick={() => deleted(contact)} />
      </th>
    </tr>
  );
};

Contact.propTypes = {
  contact: PropTypes.instanceOf(Contacto).isRequired,
  conectado: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired,
};

export default Contact;
