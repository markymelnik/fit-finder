import { useRef } from 'react';
import SliderCard from '../../Card/SliderCard/SliderCard';
import LeftArrow from '../../../../assets/icons/arrows/left-arrow.png';
import RightArrow from '../../../../assets/icons/arrows/right-arrow.png';
import './_slider-display.scss';

const SliderDisplay = () => {

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
      });
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className='slider-section-container'>
      <div className="slider-top">
        <div className="slider-text">
          <h2 className='slider-header'>Locations in Bay Ridge</h2>
          <h5 className='slider-subheader'>Popular in the area</h5>
        </div>
        <div className="slider-scroll-btns">
          <button onClick={scrollLeft} className="slider-scroll-btn">
            <img src={LeftArrow} alt="left arrow" className="slider-arrow"></img>
          </button>
          <button onClick={scrollRight} className="slider-scroll-btn">
            <img src={RightArrow} alt="right arrow" className="slider-arrow"></img>
          </button>
        </div>
      </div>
      <div className='slider-display'>
        <div className='slider-display-cards' ref={sliderRef}>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
        </div>
      </div>
    </div>
  );
};

export default SliderDisplay;
