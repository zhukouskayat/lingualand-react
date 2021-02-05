import React from "react";

import "./location.css";
import Maps from "./map/map";

const Location = () => (
  <div className="location">
    <div>
      <h3>United States</h3>
      <p>LinguaLand Inc. registered in the USA.</p>
      <p>Our head office is located at:</p>
      <p>
        Suite 120 and 200, 611 Gateway Blvd, South San Francisco, CA 94080, USA
      </p>
    </div>
    <div className="map">
      <Maps />
    </div>
  </div>
);

export default Location;
