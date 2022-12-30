/**
 * Ejercicios sesiones 1,2 y 3
 */

import React from "react";
import { Contacto } from "../../models/contact.class";
import ComponentB from "../pure/ComponentB";

const ComponentA = () => {
  const defaultContact = new Contacto(
    "Lisandro",
    "Baldoma",
    "baldomalisandro@hotmail.com",
    true
  );

  return (
    <div>
      <ComponentB contact={defaultContact}></ComponentB>
    </div>
  );
};

export default ComponentA;
