import TopDescription from "./FacilityPageComponents/FacilityInformation/TopDescription";
import FacilityPhoto from "./FacilityPageComponents/FacilityInformation/FacilityPhoto";
import FacilityAbout from "./FacilityPageComponents/FacilityInformation/FacilityAbout/FacilityAbout";
import BackButton from "./FacilityPageComponents/BackButton";

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