import HomePagePhoto from './WelcomeSection/WelcomePhoto/WelcomePhoto';
import WelcomeText from './WelcomeSection/WelcomeText/WelcomeText';
import HomePageSearchBar from './WelcomeSection/HomePageSearchbar/HomePageSearchbar';
import SliderSection from './SliderDisplay/SliderDisplay';
import AboutSection from './AboutSection/AboutSection';
import ExploreSection from './ExploreSection/ExploreSection';
import SectionDivider from './SectionDivider/HomePageSectionDivider';
import ImageSection from './ImageSection/ImageSection';
import './_home-page.scss';

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
