import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      localStorage.setItem("credential", values);
    },
  });

  return (
    <Container maxWidth="sm" className="mt-5">
      <form className="d-flex flex-column gap-3" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          placeholder="ingrese su Email"
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Ingresar
        </Button>
        <NavLink to="/register">
          <Button color="secondary" variant="contained" fullWidth type="submit">
            Registrarme
          </Button>
        </NavLink>
      </form>
    </Container>
  );
}
