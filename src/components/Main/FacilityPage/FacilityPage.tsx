import TopDescription from "./FacilityInformation/TopDescription/TopDescription";
import FacilityPhoto from "./FacilityInformation/FacilityPhoto/FacilityPhoto";
import FacilityAbout from "./FacilityInformation/FacilityAbout/FacilityAbout";
import BackButton from "./BackButton/BackButton";

const SelectedFacilityPage = () => {

  return (
    <div className="facility-page-container">
      <TopDescription />
      <FacilityPhoto />
      <FacilityAbout />
      <BackButton />
    </div>
  )
}

export default SelectedFacilityPage;