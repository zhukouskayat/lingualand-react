import React from "react";

import "./infoBlock.css";

import Statistics from "./statistics/statictics";

const InfoBlock = () => (
  <div className="infoBlock">
    <h1>Want to study English? Do it at a top English school abroad!</h1>
    <Statistics />
    <p className="text">
      English courses abroad are a great way to learn the language while
      traveling. You travel to the English-speaking country and learn from
      native speakers while exploring local culture and lifestyle. You will
      begin to feel comfortable using English in casual situations and your
      comprehension will grow by leaps and bounds as you learn to use the
      language more confidently.
    </p>
  </div>
);

export default InfoBlock;
