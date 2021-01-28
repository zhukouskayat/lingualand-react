import React from "react";

import Carousel from 'react-bootstrap/Carousel'

import "./banner.css";

import banner1 from "../../../ill/banner_1.svg";

export default function Banner() {

  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First banner"
        />
      </Carousel.Item>
      {/* <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={}
      alt="Second banner"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}
