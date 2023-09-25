import TopSection from "./Sections/TopSection/TopSection";
import PhotoSection from "./Sections/PhotoSection/PhotoSection";
import AboutSection from "./Sections/AboutSection/AboutSection";
import BackButton from "../../common/button/nav/BackButton";
import './_facility-page.scss';
import SaveSection from "./Sections/SaveSection/SaveSection";

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