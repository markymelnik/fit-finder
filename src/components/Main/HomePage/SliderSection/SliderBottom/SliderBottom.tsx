import DownArrowSVG from "./DownArrowSVG";
import AboutLink from "../../../../Header/DesktopHeader/NavigationBar/AboutLink";
import "./_slider-bottom.scss";

const SliderBottom = () => {
  return (
    <div className="slider-bottom-details">
      <div className="slider-learn-more">
        <DownArrowSVG />
        <AboutLink customClass={'slider-link-wrapper'} innerText={'Learn more'} />
      </div>
      
    </div>
  );
};

export default SliderBottom;
