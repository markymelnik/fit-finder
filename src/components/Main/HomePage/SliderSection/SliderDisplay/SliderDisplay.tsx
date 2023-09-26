import SliderCard from "../SliderCard/SliderCard";
import "./_slider-display.scss";

const SliderDisplay = ({ sliderRef }: any) => {
  return (
    <div className="slider-display">
      <div className="slider-display-cards" ref={sliderRef}>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>
    </div>
  );
};

export default SliderDisplay;
