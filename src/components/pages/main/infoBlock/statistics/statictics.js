import React from "react";

import "./statistics.css";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Statistics = () => (
  <div className="statistics">
    <div className="text-col1">
      <p>
      <FontAwesomeIcon icon={faGlobe} className="faGlobe" />
        Over <span> 2,500 </span> language courses worldwide
      </p>
      <p>
      <FontAwesomeIcon icon={faHeadset} className="faHeadset" />
        We provide visa assistance and personal consultations
      </p>
    </div>
    <div className="text-col2">
      <p>
      <FontAwesomeIcon icon={faPercent} className="faPercent" />
        Our prices are lower than booking with schools directly
      </p>
      <p>
      <FontAwesomeIcon icon={faDollarSign} className="faDollarSign" />
        Your deposit is returned in case of visa rejection
      </p>
    </div>
  </div>
);

export default Statistics;