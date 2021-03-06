import React from "react";

import Carousel from 'react-bootstrap/Carousel'

import "./banner.css";

import banner1 from "illustrations/banner_1.svg";
import banner2 from "illustrations/banner_2.svg";

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
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={banner2}
      alt="Second banner"
        />
      </Carousel.Item>
    </Carousel>
  );
}
