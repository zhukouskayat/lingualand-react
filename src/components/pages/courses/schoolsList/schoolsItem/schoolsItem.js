import React from "react";
import CoursesButton from "./coursesButton/coursesButton";

import { Link } from 'react-router-dom';

import "./schoolsItem.css";

function SchoolsItem ({school}){
  return(
    <div className="schoolsItem">
        <h3>{school.name}</h3>
        <p>{school.location}</p>
        <h3 className="price">From {school.price}$</h3>
        <Link to={`/school/${school.id}`}><CoursesButton /></Link>
    </div>
  );
} 

export default SchoolsItem;
