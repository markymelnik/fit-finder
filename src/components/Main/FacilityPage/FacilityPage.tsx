import AboutSection from "./Sections/AboutSection/AboutSection";
import PhotoSection from "./Sections/PhotoSection/PhotoSection";
import SaveSection from "./Sections/SaveSection/SaveSection";
import TopSection from "./Sections/TopSection/TopSection";
import BackButton from "../../common/button/nav/BackButton";
import './_facility-page.scss';

const FacilityPage = () => {

  return (
    <main className="facility-page-container">
      <TopSection />
      <PhotoSection />
      <SaveSection />
      <AboutSection />
      <BackButton />
    </main>
  )
}

export default FacilityPage;