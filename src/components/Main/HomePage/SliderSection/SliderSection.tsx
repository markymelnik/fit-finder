import { useRef } from 'react';

import { useSelector } from 'react-redux';

import SliderDisplay from './SliderDisplay/SliderDisplay';
import SliderScrollButtons from './SliderScrollButtons/SliderScrollButtons';
import { RootState } from '../../../../redux/store';
import './_slider-section.scss';

const SliderSection = () => {

  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);

  const cardWidth = 325;
  const totalCards = 8;

  const scrollLeft = () => {
    if (sliderRef.current) {

      const currentScroll = sliderRef.current.scrollLeft;

      if (currentScroll <= 0) {
        sliderRef.current.scrollLeft = cardWidth * totalCards;
      } else {
        sliderRef.current.scrollBy({
          top: 0,
          left: -200,
          behavior: 'smooth'
        });
      }
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {

      const currentScroll = sliderRef.current.scrollLeft;
      const maxScroll = cardWidth * totalCards - sliderRef.current.offsetWidth;

      if (currentScroll >= maxScroll) {
        sliderRef.current.scrollLeft = 0;
      } else {
        sliderRef.current.scrollBy({
          top: 0,
          left: 200,
          behavior: 'smooth'
        });
      }
    }
  }

  return (
    <div className='slider-section-container'>
      <div className="slider-top-details">
        <div className="slider-top-left-text">
          <h2 className='slider-header'>Locations in New York City</h2>
          <div className='slider-subheader'>Discover & Explore</div>
        </div>
       {!isMobile && <SliderScrollButtons scrollLeft={scrollLeft} scrollRight={scrollRight} />}
      </div>
      <SliderDisplay sliderRef={sliderRef}/>
    </div>
  );
};

export default SliderSection;
