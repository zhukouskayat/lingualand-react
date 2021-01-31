import React from "react";

import "./reviews.css";

import ReviewItems from "./reviewItems/reviewItems"

import revIll from "../../../ill/reviews.svg";

const Reviews = () => (
  <div className="reviews">
    <h2>Choose the right course for you based on reviews!</h2>
    <ReviewItems />
    <img src={revIll} alt="illustration" className="revIll"></img>
  </div>
);

export default Reviews;
