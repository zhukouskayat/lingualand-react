import React from "react";

import "./reviews.css";

import ReviewItems from "./reviewItems/reviewItems";

import revIll from "illustrations/reviews.svg";
import AddReview from "./addReview/addReview";

function Reviews() {
  return (
    <div className="reviews">
      <h2>Choose the right course for you based on reviews!</h2>
      <ReviewItems />
      <img src={revIll} alt="illustration" className="revIll"></img>
      <AddReview />
    </div>
  );
}

export default Reviews;
