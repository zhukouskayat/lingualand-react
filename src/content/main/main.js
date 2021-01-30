import React from "react";

import "./main.css";

import Banner from "./banner/banner";
import InfoBlock from "./infoBlock/infoBlock";
import RequestCallBack from "./request/request";
import Reviews from "./reviews/reviews";
import Subscribe from "./subscribe/subscribe";

const Main = () => (
  <React.Fragment>
    <Banner />
    <InfoBlock />
    <Reviews />
    <Subscribe />
    <RequestCallBack />
  </React.Fragment>
);

export default Main;