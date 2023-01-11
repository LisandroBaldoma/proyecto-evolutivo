import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ESTADO } from "../../models/estados.enum";
import { Button, InputLabel } from "@mui/material";
import { Contacto } from "../../models/contact.class";

const FormAddContactFormik = ({ add, nContacts }) => {
  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    estado: ESTADO.ONLINE,
  };

  const validationSchema = yup.object().shape({
    nombre: yup
      .string()
      .required("Complete el Nombre")
      .min(4, "Minimo 4 caracteres")
      .max(12, "Maximo 12 caracteres")
      .uppercase("Debe usar letra mayuscula"),
    apellido: yup
      .string()
      .required("Complete el Apellido")
      .min(4, "Minimo 4 caracteres")
      .max(12, "Maximo 12 caracteres")
      .uppercase("Debe usar letra mayuscula"),
    email: yup
      .string()
      .required("Complete el Email")
      .email("Ingrese un email corecto"),
  });

  return (
    <div>
      <h1>Complete el siguiente formulario...</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          //alert(JSON.stringify(values, null, 2));
          const newContact = new Contacto(
            values.nombre,
            values.apellido,
            values.email,
            values.estado
          );
          add(newContact);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form >
            <InputLabel htmlFor="nombre">Nombre</InputLabel>
            <Field 
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre"
            />
            {/**UserName Errors */}
            {errors.nombre && touched.nombre && (
              <ErrorMessage component="div" name="nombre" />
            )}
            <InputLabel htmlFor="apellido">Apellido </InputLabel>
            <Field
              id="apellido"
              type="text"
              name="apellido"
              placeholder="Ingrese su Apellido"
            />
            {/**UserName Errors */}
            {errors.apellido && touched.apellido && (
              <ErrorMessage component="div" name="apellido" />
            )}
            <InputLabel htmlFor="email">Email</InputLabel>
            <Field
              id="email"
              name="email"
              placeholder="Example@email.com"
              type="email"
            />
            {/**Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage component="div" name="email" />
            )}
            <InputLabel>
              <Button variant="contained" type="submit">
                {nContacts === 0 ? "Crear Contactos" : "Agregar Contacto"}
              </Button>
              {isSubmitting ? <p>Sendind your Credentials....</p> : null}
            </InputLabel>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormAddContactFormik;
