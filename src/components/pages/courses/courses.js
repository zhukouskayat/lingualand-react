import React from "react";

import "./courses.css";
import CoursesContent from "./coursesContent/coursesContent";
import CoursesHeading from "./coursesHeading/coursesHeading";

const Courses = () => (
  <div id="languageCourses">
    <CoursesHeading />
    <CoursesContent />
  </div>
);

export default Courses;
