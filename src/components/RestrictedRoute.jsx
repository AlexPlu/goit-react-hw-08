import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <Route {...rest} render={(props) => (isLoggedIn ? <Redirect to="/contacts" /> : <Component {...props} />)} />;
};

export default RestrictedRoute;
