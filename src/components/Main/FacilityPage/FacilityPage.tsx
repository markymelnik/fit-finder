import FacilityTopDescription from "./Information/TopDescription/FacilityTopDescription";
import FacilityPagePhoto from "./Information/Photo/FacilityPagePhoto";
import FacilityAbout from "./Information/About/FacilityAbout";
import BackButton from "../../common/button/nav/BackButton";
import './_facility-page.scss';
import FacilitySaveSection from "./Information/SaveSection/SaveSection";

const FacilityPage = () => {

  return (
    <main className="facility-page-container">
      <FacilityTopDescription />
      <FacilityPagePhoto />
      <FacilitySaveSection />
      <FacilityAbout />
      <BackButton />
    </main>
  )
}

export default FacilityPage;