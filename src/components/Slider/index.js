import "./index.css";
import React, { useState } from "react";

export const SliderDots = ({ nbSlides, defaultActiveSlide }) => {
  const [activeSlide, setActiveSlide] = useState(defaultActiveSlide ? Number(defaultActiveSlide) : 1);

  const dots = () => {
    const dots = [];

    for (let i = 1; i <= nbSlides; i++) {
      dots.push(
        <i
          className={`ri-checkbox-blank-circle-fill slider-dot 
          ${activeSlide === i ? "active-slide" : ""}`}
          key={`slide-dot-${i}`}
          onClick={() => goToSlide(i)}></i>
      );
    }

    return dots;
  };

  const goToSlide = (slideNumber) => {
    if (slideNumber > Number(nbSlides)) {
      setActiveSlide(1);
    } else if (slideNumber < 1) {
      setActiveSlide(Number(nbSlides));
    } else {
      setActiveSlide(slideNumber);
    }
  };

  return (
    <div className="slider-dots picto">
      <i onClick={() => goToSlide(activeSlide - 1)} className="ri-arrow-left-s-line slider-arrow"></i>
      {dots()}
      <i onClick={() => goToSlide(activeSlide + 1)} className="ri-arrow-right-s-line slider-arrow"></i>
    </div>
  );
};
