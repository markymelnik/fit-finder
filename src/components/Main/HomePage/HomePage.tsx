import HomePhoto from './WelcomeSection/HomePhoto/HomePhoto';
import HomeWelcomeText from './WelcomeSection/HomeWelcomeText/HomeWelcomeText';
import HomeSearchBar from './WelcomeSection/HomePageSearchBar/HomePageSearchBar';
import SliderSection from './SliderSection/SliderSection';
import InformationSection from './InformationSection/InformationSection';
import './_home-page.scss';

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
