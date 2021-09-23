import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";



function App() {

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
