import FacilityTopDescription from "./Information/TopDescription/FacilityTopDescription";
import FacilityPagePhoto from "./Information/Photo/FacilityPagePhoto";
import FacilityAbout from "./Information/About/FacilityAbout";
import BackButton from "./BackButton/BackButton";
import './_facility-page.scss';

const FacilityPage = () => {

  return (
    <main className="facility-page-container">
      <FacilityTopDescription />
      <FacilityPagePhoto />
      <FacilityAbout />
      <BackButton />
    </main>
  )
}

export default FacilityPage;