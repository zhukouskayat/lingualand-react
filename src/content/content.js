import React from "react";

import "./content.css";

import Main from "./main/main";
import Courses from "./courses/courses";
import ContactUs from "./contactUs/contactUs";
import SignUp from "./signUp/signUp";

import { Route } from "react-router-dom";

const Content = () => (
  <div id="content">
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
  </div>
);

export default Content;
