import HomePagePhoto from './WelcomeSection/Photo/HomePagePhoto';
import WelcomeText from './WelcomeSection/WelcomeText/WelcomeText';
import HomeSearchBar from './WelcomeSection/SearchBar/HomeSearchBar';
import SliderSection from './SliderDisplay/SliderDisplay';
import AboutSection from './AboutSection/AboutSection';
import ExploreSection from './ExploreSection/ExploreSection';
import SectionDivider from './SectionDivider/SectionDivider';
import './_home-page.scss';

const HomePage = () => {
  return (
    <main className='home-page-container'>
      <HomePagePhoto />
      <WelcomeText />
      <HomeSearchBar />
      <SliderSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ExploreSection />
    </main>
  );
};

export default HomePage;
