import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>

        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
