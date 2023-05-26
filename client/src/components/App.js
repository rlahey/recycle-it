import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import BinsIndex from "./BinsIndex";
import BinShow from "./BinShow";
import ItemForm from "./ItemForm";
import ItemIndex from "./ItemsIndex"


const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
          <h2>Homepage where I tell the user what my app is all about</h2>
        </Route>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/bins" component={BinsIndex} />
        <Route exact path="/bins/:id" component={BinShow} />
        <Route exact path="/items/new" component={ItemForm} />
        <Route exact path="/items" component={ItemIndex} />
      </Switch>
    </Router>
  );
};

export default hot(App);
