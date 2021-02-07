import React from "react";

import "./coursesHeading.css";
import Sort from "./sort/sort";

const CoursesHeading = () => (
  <div className="coursesHeading">
    <h2>Learn English abroad</h2>
    <Sort items={ ["Featured", "Price low to hight", "Price hight to low", "Alphabetically" ]} />
  </div>
);

export default CoursesHeading;
