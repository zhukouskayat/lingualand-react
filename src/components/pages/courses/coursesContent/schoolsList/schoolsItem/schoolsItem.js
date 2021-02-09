import React from "react";
import CoursesButton from "../coursesButton/coursesButton";

import { Link } from "react-router-dom";

import "./schoolsItem.css";

function SchoolsItem ({id, name, location, price}){
  return(
    <div className="schoolsItem">
        <h3>{name}</h3>
        <p>{location}</p>
        <h3 className="price">From {price}$</h3>
        <Link to={`/course/${id}`}><CoursesButton /></Link>
    </div>
  );
} 

export default SchoolsItem;
