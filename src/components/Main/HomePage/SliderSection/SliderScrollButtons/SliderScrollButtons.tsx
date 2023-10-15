import LeftArrowSVG from "./LeftArrowSVG";
import RightArrowSVG from "./RightArrowSVG";
import "./_slider-scroll-btns.scss";

interface SliderScrollButtonsProps {
  scrollLeft: () => void;
  scrollRight: () => void;
}
const SliderScrollButtons = ({ scrollLeft, scrollRight }: SliderScrollButtonsProps) => {
  return (
    <div className="slider-scroll-btns">
      <button onClick={scrollLeft} className="slider-scroll-btn-left">
        <LeftArrowSVG />
      </button>
      <button onClick={scrollRight} className="slider-scroll-btn-right">
        <RightArrowSVG />
      </button>
    </div>
  );
};

export default SliderScrollButtons;
