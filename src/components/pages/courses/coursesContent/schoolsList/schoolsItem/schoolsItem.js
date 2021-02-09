import React from "react";
import CoursesButton from "../coursesButton/coursesButton";

import "./schoolsItem.css";

const SchoolsItem = () => (
  <div className="schoolsItem">
    <div className="itemLeft">
      <h3>International House London</h3>
      <p>London, UK</p>
      <p className="itemLang">English</p>
    </div>
    <div className="itemRight">
      <h3>From 499$</h3>
      <p>For 2 weeks</p>
    </div>
    <CoursesButton />
  </div>
);

export default SchoolsItem;
