import { Container, Typography, Box } from "@mui/material";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <RegistrationForm />
      </Box>
    </Container>
  );
};

export default RegistrationPage;
