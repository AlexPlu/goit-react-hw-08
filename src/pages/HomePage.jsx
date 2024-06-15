import { Container, Typography, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Phonebook App
        </Typography>
        <Typography variant="body1">Manage your contacts easily and efficiently.</Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
