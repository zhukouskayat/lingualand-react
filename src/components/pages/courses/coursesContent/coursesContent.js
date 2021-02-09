import React from "react";

import "./coursesContent.css";
import Filter from "./filter/filter";

const CoursesContent = () => (
  <div className="coursesContent">
    <div className="contentFiler">
      <h3>Filter language</h3>
      <Filter onClickItem={(name) => console.log(name)} items={["English", "Spanish", "German", "French"]}/>
    </div>
  </div>
);

export default CoursesContent;
