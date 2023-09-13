import HomePagePhoto from './WelcomeSection/Photo/HomePagePhoto';
import WelcomeText from './WelcomeSection/WelcomeText/WelcomeText';
import HomePageSearchBar from './WelcomeSection/HomePageSearchBar/HomePageSearchBar';
import SliderSection from './SliderDisplay/SliderDisplay';
import AboutSection from './AboutSection/AboutSection';
import ExploreSection from './ExploreSection/ExploreSection';
import SectionDivider from '../SectionDivider/SectionDivider';
import './_home-page.scss';
import ImageSection from './ImageSection/ImageSection';

const HomePage = () => {
  return (
    <main className='home-page-container'>
      <HomePagePhoto />
      <WelcomeText />
      <HomePageSearchBar />
      <SliderSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ExploreSection />
      <SectionDivider />
      <ImageSection />
    </main>
  );
};

export default HomePage;
