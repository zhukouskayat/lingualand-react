import React from "react";

import "./main.css";

import Banner from "./banner/banner";
import BannerBckg from "./banner/bannerBackground";

const Main = () => (
  <React.Fragment>
    <Banner />
    <BannerBckg />
    <div>Text text text</div>
  </React.Fragment>
);

export default Main;
