import Subscribe from "components/subscribe/subscribe";
import React from "react";
import { useParams } from "react-router-dom";
import "./schoolDetails.css";
import Popup from "components/popup/popup";

function Course({ schools }) {

  const { id } = useParams();

  const school = schools.find((school) => school.id === id);

  return (
    <>
    <div className="schoolDetails">
      <h2>{school.name}</h2>
      <p>{school.location}</p>
      <p className="discription">{school.discription}</p>
      <div className="schoolCourses">
        <div>
          <h3>{school.fcourse}</h3>
          <p>{school.fcourseDiscpr}</p>
          <p className="schoolPrice">{school.fcoursePrice}$</p>
          <p>{school.continue}</p>
          <form>
            <button type="button" className="book">Book</button>
          </form>
        </div>
        <div>
          <h3>{school.scourse}</h3>
          <p>{school.scourseDiscpr}</p>
          <p className="schoolPrice">{school.scoursePrice}$</p>
          <p>{school.continue}</p>
          <form>
            <button type="button" className="book">Book</button>
          </form>
        </div>
      </div>
    </div>
    <Subscribe />
    </>
  );
}

export default Course;
