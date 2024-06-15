import { Container, Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import ContactList from "../components/ContactList";

const ContactsPage = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contacts
        </Typography>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Box>
    </Container>
  );
};

export default ContactsPage;
