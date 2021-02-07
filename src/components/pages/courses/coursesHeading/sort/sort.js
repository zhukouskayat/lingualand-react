import React from "react";

import "./sort.css";

const Sort = () => (
  <div className="sort">
    <div className="sortLabel">
      <span className="sortBy">Sort by:</span>
      <span>Featured</span>
    </div>
    <div className="sortPopup">
      <ul>
        <li className="sortPopup active">Featured</li>
        <li>Price low to hight</li>
        <li>Price hight to low</li>
        <li>Alphabetically</li>
      </ul>
    </div>
  </div>
);

export default Sort;
