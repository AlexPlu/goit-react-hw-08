import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { Container } from "@mui/material";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import Layout from "./components/Layout";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <RestrictedRoute path="/register" component={RegistrationPage} />
            <RestrictedRoute path="/login" component={LoginPage} />
            <PrivateRoute path="/contacts" component={ContactsPage} />
          </Switch>
        </Container>
      </Layout>
    </Router>
  );
};

export default App;
