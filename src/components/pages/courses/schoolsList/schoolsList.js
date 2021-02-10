import Subscribe from "components/subscribe/subscribe";
import React from "react";
import CoursesHeading from "./coursesHeading/coursesHeading";
import SchoolsItem from "./schoolsItem/schoolsItem";

import "./schoolsList.css";

function SchoolList({ schools }) {
  console.log(schools)
  return (
    <>
      <div id="languageCourses">
        <CoursesHeading />
        <div className="coursesContent">
          <div className="schoolsList">
            {schools.map((school) => (
              <SchoolsItem key={school.id} school={school} />
            ))}
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

export default SchoolList;
