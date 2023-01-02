import React, { useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { ESTADO } from "../../models/estados.enum";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class";

const FormAddContact = ({ add }) => {
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
      inputEstadoRef.current.value === "1" ? true : false
    );
    add(newContact);
    limpiarForm();
  }

  function limpiarForm() {
    inputNombreRef.current.value = "";
    inputApellidoRef.current.value = "";
    inputEmailRef.current.value = "";
    inputEstadoRef.current.value = "1";
  }

  return (
    <Form onSubmit={addContact} className="mt-3">
      <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
        <Form.Label column sm="2">
          Nombre
        </Form.Label>
        <Col sm="4">
          <Form.Control
            type="text"
            placeholder="Ingrese Nombre"
            ref={inputNombreRef}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
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
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="4">
          <Form.Control
            type="email"
            defaultValue=""
            placeholder="Ingrese email"
            ref={inputEmailRef}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
        <Form.Label column sm="2">
          Estado
        </Form.Label>
        <Col sm="4">
          <Form.Select size="sm" ref={inputEstadoRef}>
            <option value="1">{ESTADO.ONLINE}</option>
            <option value="2">{ESTADO.OFFLINE}</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Col sm="4"></Col>
      <Button type="submit" variant="primary">
        Add Contacto
      </Button>
      {""}
    </Form>
  );
};

FormAddContact.propTypes = {
  add: PropTypes.func.isRequired,
};

export default FormAddContact;
