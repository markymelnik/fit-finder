import CarouselHeader from './CarouselHeader';
import CarouselSubheader from './CarouselSubheader';
import CarouselDisplay from './CarouselDisplay';

const Carousel = () => {
  return (
    <div className='carousel-container'>
      <CarouselHeader />
      <CarouselSubheader />
      <CarouselDisplay />
    </div>
  );
};

export default Carousel;
