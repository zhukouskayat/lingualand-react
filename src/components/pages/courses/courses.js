import Subscribe from "components/subscribe/subscribe";
import React from "react";

import "./courses.css";
import CoursesContent from "./coursesContent/coursesContent";
import CoursesHeading from "./coursesHeading/coursesHeading";

function Courses() {
  return (
    <>
      <div id="languageCourses">
        <CoursesHeading />
        <CoursesContent />
      </div>
      <Subscribe />
    </>
  );
}

export default Courses;
