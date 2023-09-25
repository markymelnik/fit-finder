import LeftArrow from '../../../../../assets/icons/arrows/left-arrow.png';
import RightArrow from '../../../../../assets/icons/arrows/right-arrow.png';
import './_slider-scroll-btns.scss';

interface SliderScrollButtonsProps {
  scrollLeft: () => void;
  scrollRight: () => void;
}
const SliderScrollButtons = ({ scrollLeft, scrollRight }: SliderScrollButtonsProps) => {

  return (
    <div className="slider-scroll-btns">
    <button onClick={scrollLeft} className="slider-scroll-btn">
      <img src={LeftArrow} alt="left arrow" className="slider-arrow"></img>
    </button>
    <button onClick={scrollRight} className="slider-scroll-btn">
      <img src={RightArrow} alt="right arrow" className="slider-arrow"></img>
    </button>
    </div>
  )
  
}

export default SliderScrollButtons;