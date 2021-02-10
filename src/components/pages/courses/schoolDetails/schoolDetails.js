import React from "react";
import { useParams } from "react-router-dom";


function Course({schools}) {

  const { id } = useParams();

  const school = schools.find((school) => school.id === id);

  return (
  <div>
  <p>User hrj {school.name}</p>
  <p>{school.price}$</p>
  </div>
  )}

export default Course;
