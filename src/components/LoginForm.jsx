import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";
import { TextField, Button, Box } from "@mui/material";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(login(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Box mb={2}>
            <Field
              as={TextField}
              type="email"
              name="email"
              label="Email"
              fullWidth
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
          </Box>
          <Box mb={2}>
            <Field
              as={TextField}
              type="password"
              name="password"
              label="Password"
              fullWidth
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
