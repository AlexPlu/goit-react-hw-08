import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const Navigation = () => {
  return (
    <nav>
      <Button color="inherit" component={NavLink} to="/">
        Home
      </Button>
      <Button color="inherit" component={NavLink} to="/contacts">
        Contacts
      </Button>
    </nav>
  );
};

export default Navigation;
