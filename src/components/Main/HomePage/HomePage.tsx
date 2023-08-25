import HomePhoto from './HomePageComponents/WelcomeSection/HomePhoto';
import HomeWelcomeText from './HomePageComponents/WelcomeSection/HomeWelcomeText';
import HomeSearchBar from './HomePageComponents/WelcomeSection/HomePageSearchBar';
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
