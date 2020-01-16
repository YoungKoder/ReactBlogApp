import React from "react";
import AuthSignin from "./components/auth/AuthSignin";
import SigninPage from "./pages/SigninPage";
import AuthSignup from "./components/auth/AuthSignup";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <AuthSignin />
        </Route>
      </Switch>
    </Router>
  );
}
