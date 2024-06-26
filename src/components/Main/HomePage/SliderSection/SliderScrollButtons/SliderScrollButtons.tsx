import ChevronLeftSVG from "../../../../../assets/svg/arrows/ChevronLeftSVG";
import ChevronRightSVG from "../../../../../assets/svg/arrows/ChevronRightSVG";
import "./_slider-scroll-btns.scss";

interface SliderScrollButtonsProps {
  scrollLeft: () => void;
  scrollRight: () => void;
}
const SliderScrollButtons = ({ scrollLeft, scrollRight }: SliderScrollButtonsProps) => {
  return (
    <div className="slider-scroll-btns">
      <button onClick={scrollLeft} className="slider-scroll-btn-left" aria-label="Slider display scroll left">
        <ChevronLeftSVG />
      </button>
      <button onClick={scrollRight} className="slider-scroll-btn-right" aria-label="Slider display scroll right">
        <ChevronRightSVG />
      </button>
    </div>
  );
};

export default SliderScrollButtons;
