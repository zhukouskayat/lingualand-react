import React, { useEffect, useState } from "react";

import "./pages.css";

import Main from "components/pages/main/main";
import Courses from "components/pages/courses/courses";
import ContactUs from "components/pages/contactUs/contactUs";
import SignUp from "components/pages/signUp/signUp";

import { Route, Switch } from "react-router-dom";
import RequestCallBack from "components/request/request";
import Course from "./courses/schoolDetails/schoolDetails";

function Pages (){

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/schools").then((resp) => resp.json()).then(json =>{
      setSchools(json);
    }) 
  }, [])

  return (
    <div id="pages">
    <Switch>
    <Route exact path="/">
        <Main />
      </Route>
      <Route path="/courses">
        <Courses schools={schools}/>
      </Route>
      <Route path="/school/:id">
        <Course schools={schools} />
      </Route>
      <Route path="/contacts">
        <ContactUs />
      </Route>
      <Route path="/login">
        <SignUp />
      </Route>
    </Switch>
    <RequestCallBack />
    </div>
  );
}

export default Pages;
