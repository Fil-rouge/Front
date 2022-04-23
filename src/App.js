import { SliderDots } from "./components/SliderDots";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <div className="App">
      <SliderDots nbSlides="5" defaultActiveSlide="3" />
    </div>
  );
}

export default App;
