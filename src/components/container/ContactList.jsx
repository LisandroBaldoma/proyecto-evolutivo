/**
 * Ejercicios sesiones 7,8 y 9.
 */

import React, { useState, useEffect } from "react";
import { Contacto } from "../../models/contact.class";
import Contact from "../../components/pure/Contact";

import FormAddContact from "../form/FormAddContact";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";

const ContactList = () => {
  const contact1 = new Contacto(
    "Lisandro",
    "Baldoma",
    "baldomalisandro@hotmail.com",
    true
  );
  const contact2 = new Contacto(
    "Florencia",
    "Tiberti",
    "florenciatiberti@gmail.com",
    true
  );
  const contact3 = new Contacto("Lionel", "Messi", "liomessi@gmail.com", false);
  const contact4 = new Contacto(
    "Pablo",
    "Baldoma",
    "pablobaldoma@gmail.com",
    false
  );
  // Estado del componente
  const [contacts, setContacts] = useState([
    contact1,
    contact2,
    contact3,
    contact4,
  ]);

  // Ciclo de vida dell componente

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Contacto modificado");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function modificarEstado(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].conectado = !tempContacts[index].conectado;
    setContacts(tempContacts);
  }
  function deletedContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }
  function addContact(contact) {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  let contactTable;

  if (contacts.length > 0) {
    contactTable = (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <Contact
                key={index}
                contact={contact}
                conectado={modificarEstado}
                deleted={deletedContact}
              ></Contact>
            );
          })}
        </tbody>
      </Table>
    );
  } else {
    contactTable = (
      <div className="text-danger border-bottom border-danger">
        <h2>No hay contactos cargados en la Agenda</h2>
        <h3>Por favor Crea un primer Contacto</h3>
      </div>
    );
  }

  return (
    <div>
      <Col className="container text-center">
        <Card style={{ backgroundColor: "azure" }}>
          <Card.Body>
            <Card.Title>Agenda de Contactos</Card.Title>
            {loading ? "Cargando Contactos..." : contactTable}
          </Card.Body>
          <FormAddContact add={addContact} nContacts={contacts.length}></FormAddContact>
        </Card>
      </Col>
    </div>
  );
};

export default ContactList;
