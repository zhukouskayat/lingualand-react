import React from "react";

import "./reviewItems.css";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewItems = () => (
  <>
    <div className="reviewItem">
      <h3>Jonathan Dean</h3>
      <p className="reviewSchoolName">ES Dubai</p>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} className="faStar" />
        <FontAwesomeIcon icon={faStar} className="faStar" />
        <FontAwesomeIcon icon={faStar} className="faStar" />
        <FontAwesomeIcon icon={faStar} className="faStar" />
        <FontAwesomeIcon icon={faStar} className="faStar" />
      </div>
      <p>
        The trip and training are amazing! From the very first days I liked
        everything. In school, everyone wants to meet you and talk, everyone
        behaves in a friendly manner, regardless of age. Teachers teach the
        language available for everyone and at a good level, pay attention to
        everyone. Many new friends, lots of parties and various interesting
        trips. Emotions and knowledge i received in a huge amount, despite the
        fact that i traveled only for 2 weeks, would stay there for 3 month, if
        i had time for this. I advise everyone who has the idea to travel and
        learn the language. Thank you, LinguaLand!
      </p>
    </div>
    <div className="reviewItem">
      <h3>Susan Stanley</h3>
      <p className="reviewSchoolName">Twin English Centre London</p>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} className="faStar" />
        <FontAwesomeIcon icon={faStar} className="faStar" />
        <FontAwesomeIcon icon={faStar} className="faStar" />
        <FontAwesomeIcon icon={faStar} className="faStar" />
        <FontAwesomeIcon icon={faStar} className="faStar" />
      </div>
      <p>
        I booked a course for a week, also took visa support. All at the highest
        level!!! Feedback is fast and prompt. A lot of tips are sent by e-mail.
        It was not possible to significantly increase the level of the language
        in a week, but to overcome the language barrier is quite. An excellent
        entertainment program from the school, there are discounts in museums. I
        want to say LinguaLand THANKS for the quality service and an
        unforgettable trip !!!
      </p>
    </div>
  </>
);

export default ReviewItems;
