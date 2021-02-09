import React from "react";
import CoursesButton from "../coursesButton/coursesButton";

import "./schoolsItem.css";

const SchoolsItem = ({name, location, language, price, weeks}) => (
  <div className="schoolsItem">
    <div className="itemLeft">
      <h3>{name}</h3>
      <p>{location}</p>
      <p className="itemLang">{language}</p>
    </div>
    <div className="itemRight">
      <h3>From {price}$</h3>
      <p>For {weeks}</p>
    </div>
    <CoursesButton />
  </div>
);

export default SchoolsItem;
