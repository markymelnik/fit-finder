import HomePagePhoto from './WelcomeSection/Photo/HomePagePhoto';
import WelcomeText from './WelcomeSection/WelcomeText/WelcomeText';
import HomePageSearchbar from './WelcomeSection/Searchbar/HomePageSearchbar';
import SliderSection from './SliderSection/SliderSection';
import InfoSection from './InfoSection/InfoSection';
import './_home-page.scss';

const HomePage = () => {
  return (
    <main className='home-page-container'>
      <HomePagePhoto />
      <WelcomeText />
      <HomePageSearchbar />
      <SliderSection />
      <InfoSection />
    </main>
  );
};

export default HomePage;
