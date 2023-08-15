import { useRef } from 'react';
import DummyCard from "../../Card/DummyCard";
import LeftArrow from '../../../assets/imgs/left-arrow.png';
import RightArrow from '../../../assets/imgs/right-arrow.png';

const SliderDisplay = () => {

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
      });
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className='slider-display'>
      <div className="slider-scroll-btns">
        <button onClick={scrollLeft} className="slider-scroll-btn">
          <img src={LeftArrow} alt="left arrow" className="slider-arrow"></img>
        </button>
        <button onClick={scrollRight} className="slider-scroll-btn">
        <img src={RightArrow} alt="right arrow" className="slider-arrow"></img>
        </button>
      </div>
      <div className='display-cards' ref={carouselRef}>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
      </div>
    </div>
    
  );
};

export default SliderDisplay;
