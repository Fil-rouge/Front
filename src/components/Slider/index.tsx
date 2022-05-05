import styled from "styled-components";
import { useState } from "react";
import CSS from "csstype";

const StyledSliderDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  & > .slider-dot {
    font-size: 8px;
    color: #c4c4c4;
    transition: all 0.3s ease;
    cursor: pointer;
    &.active-slide {
      color: black;
      font-size: 10px;
    }
  }
  & > .slider-arrow {
    cursor: pointer;
  }
`;

const StyledSlider = styled.div`
  .slides {
    overflow: hidden;
    width: 100%;

    &--container {
      width: max-content;
      display: flex;
      margin-left: 5%;
      gap: 10vw;
      margin-bottom: 20px;

      transition: all 0.3s ease;
      .slider-slide {
        width: 90vw;
        display: flex;
        align-items: center;

        img {
          width: 100%
        }
      }
    }
  }
`;
export const Slider = ({ slides, defaultActiveSlide}) => {
  const [activeSlide, setActiveSlide] = useState(defaultActiveSlide ? Number(defaultActiveSlide) : 1);

  const sliderStyle: CSS.Properties = {
    transform: `translateX(calc(${-(activeSlide - 1)} * 100vw))`,
  };

  const getSlides = () => {
    const sliderSlides: JSX.Element[] = [];

    for (let i = 0; i <= slides.length; i++) {
      sliderSlides.push(
        <div className="slider-slide" key={`slide-${i}`}>
          <img src={slides[i]} />
        </div>
      );
    }

    return sliderSlides;
  };

  const getDots = () => {
    const dots: JSX.Element[] = [];

    for (let i = 1; i <= slides.length; i++) {
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
    if (slideNumber > Number(slides.length)) {
      setActiveSlide(1);
    } else if (slideNumber < 1) {
      setActiveSlide(Number(slides.length));
    } else {
      setActiveSlide(slideNumber);
    }
  };

  return (
    <StyledSlider>
      <div className="slides">
        <div className="slides--container" style={sliderStyle}>
          {getSlides()}
        </div>
      </div>
      <StyledSliderDots>
        <i onClick={() => goToSlide(activeSlide - 1)} className="ri-arrow-left-s-line slider-arrow"></i>
        {getDots()}
        <i onClick={() => goToSlide(activeSlide + 1)} className="ri-arrow-right-s-line slider-arrow"></i>
      </StyledSliderDots>
    </StyledSlider>
  );
};
