import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Button color="inherit" component={NavLink} to="/">
        Home
      </Button>
      {isLoggedIn && (
        <Button color="inherit" component={NavLink} to="/contacts">
          Contacts
        </Button>
      )}
    </nav>
  );
};

export default Navigation;
