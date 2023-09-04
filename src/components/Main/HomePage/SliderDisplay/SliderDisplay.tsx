import { useRef } from 'react';
import SliderCard from '../../Card/SliderCard/SliderCard';
import SliderScrollButtons from './SliderScrollButtons/SliderScrollButtons';
import './_slider-display.scss';
import { RootState } from '../../../../redux/store';
import { useSelector } from 'react-redux';

const SliderDisplay = () => {

  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

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
          <h5 className='slider-subheader'>Popular in your area</h5>
        </div>
       {!isMobile && <SliderScrollButtons scrollLeft={scrollLeft} scrollRight={scrollRight} />}
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
