import React from "react";

import "./content.css";

import Main from "./main/main";
import Courses from "./courses/courses";
import ContactUs from "./contactUs/contactUs";
import SignUp from "./signUp/signUp";

import { Route } from "react-router-dom";

const Content = () => (
  <div id="content">
      <Route exact path="/" component={Main} />
      <Route path="/courses" component={Courses} />
      <Route path="/contacts" component={ContactUs} />
      <Route path="/login" component={SignUp} />
  </div>
);

export default Content;
