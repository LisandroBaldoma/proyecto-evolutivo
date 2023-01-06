import React, { useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { ESTADO } from "../../models/estados.enum";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class";
import FormGroup from "react-bootstrap/esm/FormGroup";

const FormAddContact = ({ add, nContacts }) => {
  const inputNombreRef = useRef("");
  const inputApellidoRef = useRef("");
  const inputEmailRef = useRef("");
  const inputEstadoRef = useRef(ESTADO.ONLINE);

  function addContact(e) {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.checkValidity());
    const newContact = new Contacto(
      inputNombreRef.current.value,
      inputApellidoRef.current.value,
      inputEmailRef.current.value,
      inputEstadoRef.current.value === ESTADO.ONLINE ? true : false,      
    );
    add(newContact);
    limpiarForm();
  }

  function limpiarForm() {
    inputNombreRef.current.value = "";
    inputApellidoRef.current.value = "";
    inputEmailRef.current.value = "";
    inputEstadoRef.current.value = ESTADO.ONLINE;
  }

  return (
    <Form onSubmit={addContact} className="mt-3 d-flex flex-column">
      <Form.Group
        as={Row}
        className="mb-3 justify-content-center"
        controlId="validationCustom01"
      >
        <Form.Label column sm="2">
          Nombre
        </Form.Label>
        <Col sm="4">
          <Form.Control
            autoFocus            
            type="text"
            placeholder="Ingrese Nombre"
            ref={inputNombreRef}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        className="mb-3 justify-content-center"
        controlId="validationCustom01"
      >
        <Form.Label column sm="2">
          Apellido
        </Form.Label>
        <Col sm="4">
          <Form.Control            
            type="text"
            placeholder="Ingrese Apellido"
            ref={inputApellidoRef}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        className="mb-3 justify-content-center"
        controlId="formPlaintextEmail"
      >
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="4">
          <Form.Control
            type="email"
            placeholder="Email formato xxx@xxx.xxx"
            ref={inputEmailRef}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        className="mb-3 justify-content-center"
        controlId="validationCustom01"
      >
        <Form.Label column sm="2">
          Estado
        </Form.Label>
        <Col sm="4">
          <Form.Select size="sm" ref={inputEstadoRef}>
            <option value={ESTADO.ONLINE}>{ESTADO.ONLINE}</option>
            <option value={ESTADO.OFFLINE}>{ESTADO.OFFLINE}</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <FormGroup className="mb-3 justify-content-center">
        <Button type="submit" variant="primary">
          {nContacts === 0 ? 'Crear Contactos' : 'Agregar Contacto'}
        </Button>
      </FormGroup>
    </Form>
  );
};

FormAddContact.propTypes = {
  add: PropTypes.func.isRequired,
  nContacts: PropTypes.number.isRequired,
};

export default FormAddContact;
