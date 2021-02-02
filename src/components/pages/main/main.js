import React from "react";

import "./main.css";

import Banner from "./banner/banner";
import InfoBlock from "./infoBlock/infoBlock";
import Reviews from "./reviews/reviews";
import Subscribe from "components/subscribe/subscribe"

const Main = () => (
  <React.Fragment>
    <Banner />
    <InfoBlock />
    <Reviews />
    <Subscribe />
  </React.Fragment>
);

export default Main;