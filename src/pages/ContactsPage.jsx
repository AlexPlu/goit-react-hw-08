import { Container, Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
