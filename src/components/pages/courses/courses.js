import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import "./courses.css";
import Course from "./schoolDetails/schoolDetails";
import SchoolList from "./schoolsList/schoolsList";

function Courses({schools}) {

  const match = useRouteMatch();

  return (
    <>
    <Switch>
      <Route path={`${match.path}/school/:id`}>
      <Course school={schools} />
      </Route>
      <Route path={`${match.path}`}>
      <SchoolList schools={schools} />
      </Route>
    </Switch>
    </>
  );
}

export default Courses;
