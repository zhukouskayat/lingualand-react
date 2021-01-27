import React from "react";

import "./main.css";

import Banner from "./banner/banner";
import BannerBckg from "./banner/bannerBackground";
import InfoBlock from "./infoBlock/infoBlock";
import RequestCallBack from "./request/request";


const Main = () => (
  <React.Fragment>
    <Banner />
    <BannerBckg />
    <InfoBlock />
    <RequestCallBack />
  </React.Fragment>
);

export default Main;