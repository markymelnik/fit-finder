import SliderDisplay from './SliderDisplay';

const Carousel = () => {
  return (
    <div className='slider-container'>
      <h2 className='slider-header'>Recent Searches</h2>
      <h5 className='slider-subheader'>Popular in the area</h5>
      <SliderDisplay />
    </div>
  );
};

export default Carousel;
