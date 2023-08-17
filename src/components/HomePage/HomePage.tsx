import HomePhoto from './HomePageComponents/HomePhoto';
import HomeWelcomeText from './HomePageComponents/HomeWelcomeText';
import HomeSearchBar from './HomePageComponents/HomePageSearchBar';
import SliderSection from './HomePageComponents/SliderSection/SliderSection';
import InformationSection from './HomePageComponents/InformationSection/InformationSection';

const HomePage = () => {
  return (
    <main className='home-container'>
      <HomePhoto />
      <HomeWelcomeText />
      <HomeSearchBar />
      <SliderSection />
      <InformationSection />
    </main>
  );
};

export default HomePage;
