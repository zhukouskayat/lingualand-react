import React from "react";

import "./main.css";

import Banner from "./banner/banner";
import InfoBlock from "./infoBlock/infoBlock";
import RequestCallBack from "./request/request";


const Main = () => (
  <React.Fragment>
    <Banner />
    <InfoBlock />
    <RequestCallBack />
  </React.Fragment>
);

export default Main;