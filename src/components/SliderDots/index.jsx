import styled from "styled-components";
// import { variables } from "utils/const"

const theme = {
  primary: {
    default: "#ED8A61",
    hover: "#F1AB8E"
  },
  secondary: {
    default: "#F1AB8E",
    hover: "#ED8A61"
  }
};

const size = {
  auto: {
    width: "auto",
  },
  full: {
    width: "100%",
  },
  split: {
    width: "50%",
  },
};




export const StyledSliderDots = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  .slider-dot {
    font-size: 8px;
    color: #c4c4c4;
    transition: all 0.3s ease;
    cursor: pointer;
    .active-slide {
      color: black;
      font-size: 10px;
    }
  }
  .slider-arrow {
    cursor: pointer;
  }
`;

StyledSliderDots.defaultProps = {
  theme: "primary",
  size: "auto",
};


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
