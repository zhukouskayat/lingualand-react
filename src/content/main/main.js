import React from "react";

import "./main.css";

import Banner from "./banner/banner";
import InfoBlock from "./infoBlock/infoBlock";
import RequestCallBack from "./request/request";
import Reviews from "./reviews/reviews";

const Main = () => (
  <React.Fragment>
    <Banner />
    <InfoBlock />
    <Reviews />
    <RequestCallBack />
  </React.Fragment>
);

export default Main;