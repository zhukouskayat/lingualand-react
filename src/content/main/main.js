import React from "react";

import "./main.css";

import Banner from "./banner/banner";
import BannerBckg from "./banner/bannerBackground";
import InfoBlock from "./infoBlock/infoBlock";

const Main = () => (
  <React.Fragment>
    <Banner />
    <BannerBckg />
    <InfoBlock />
  </React.Fragment>
);

export default Main;
