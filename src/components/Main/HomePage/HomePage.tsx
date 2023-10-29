import AboutSection from './AboutSection/AboutSection';
import ExploreSection from './ExploreSection/ExploreSection';
import ImageSection from './ImageSection/ImageSection';
import SectionDivider from './SectionDivider/HomePageSectionDivider';
import SliderSection from './SliderSection/SliderSection';
import UpdateSection from './UpdateSection/UpdateSection';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import './_home-page.scss';

const HomePage = () => {
  return (
    <main className='home-page-container'>
      <WelcomeSection />
      <SliderSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <UpdateSection />
      <SectionDivider />
      <ExploreSection />
      <SectionDivider />
      <ImageSection />
    </main>
  );
};

export default HomePage;
