import MainPhoto from './MainPhoto';
import SearchBar from './MainSearchBar/MainSearchBar';
import Carousel from './Carousel/Carousel';
import Information from './Information/Information';

const Main = () => {
  return (
    <main className='main-container'>
      <MainPhoto />
      <SearchBar />
      <Carousel />
      <Information />
    </main>
  );
};

export default Main;
