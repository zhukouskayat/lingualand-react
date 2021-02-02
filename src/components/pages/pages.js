import React from "react";

import "./pages.css";

import Main from "components/pages/main/main";
import Courses from "components/pages/courses/courses";
import ContactUs from "components/pages/contactUs/contactUs";
import SignUp from "components/pages/signUp/signUp";

import { Route, Switch } from "react-router-dom";

const Pages = () => (
  <div id="pages">
  <Switch>
  <Route exact path="/">
      <Main />
    </Route>
    <Route path="/courses">
      <Courses />
    </Route>
    <Route path="/contacts">
      <ContactUs />
    </Route>
    <Route path="/login">
      <SignUp />
    </Route>
  </Switch>
  </div>
);

export default Pages;
