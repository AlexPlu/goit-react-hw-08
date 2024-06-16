import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/operations";
import { selectUser } from "../redux/auth/selectors";
import { Button, Typography } from "@mui/material";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <Typography variant="h6" component="span">
        Welcome, {user.name}
      </Typography>
      <Button color="inherit" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
