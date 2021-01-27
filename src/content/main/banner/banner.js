import React, { useState, useEffect } from "react";

import "./banner.css";

import firstImg from "../../../ill/banner1.svg";
import secondImg from "../../../ill/banner2.svg";
import thirdImg from "../../../ill/banner3.svg";

const images = [
  <img src={firstImg} alt="banner" />,
  <img src={secondImg} alt="banner" />,
  <img src={thirdImg} alt="banner" />,
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval();
  }, []);

  const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1;
  const nextImagesIndex =
    activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <div className="sliderImg sliderImagePrev" key={prevImageIndex}>{images[prevImageIndex]}</div>
      <div className="sliderImg sliderImage" key={activeIndex}>{images[activeIndex]}</div>
      <div className="sliderImg sliderImageNext" key={nextImagesIndex}>{images[nextImagesIndex]}</div>
    </div>
  );
}
