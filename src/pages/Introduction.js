import { Slider } from "./../components/Slider";
import Image1 from "./../images/Presentation-1.png";
import Image2 from "./../images/Presentation-2.png";
import Image3 from "./../images/Presentation-3.png";

const images = [Image1, Image2, Image3];

const Introduction = () => {
  return (
    <div id="test">
      <Slider nbSlides="3" defaultActiveSlide="2" slides={images}></Slider>
    </div>
  );
};

export default Introduction;
