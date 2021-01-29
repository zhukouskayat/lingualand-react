import React from "react";

import "./reviews.css";

import ReviewItems from "./reviewItems/reviewItems"

const Reviews = () => (
  <div className="reviews">
    <h2>Choose the right course for you based on reviews!</h2>
    <ReviewItems />
  </div>
);

export default Reviews;
