import { Container } from "@mui/material";
import AppBar from "./AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
