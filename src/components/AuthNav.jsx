import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const AuthNav = () => {
  return (
    <div>
      <Button color="inherit" component={NavLink} to="/register">
        Register
      </Button>
      <Button color="inherit" component={NavLink} to="/login">
        Login
      </Button>
    </div>
  );
};

export default AuthNav;
