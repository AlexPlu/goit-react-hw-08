import LoginForm from "../components/LoginForm";
import { Container, Typography, Box } from "@mui/material";

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginPage;
