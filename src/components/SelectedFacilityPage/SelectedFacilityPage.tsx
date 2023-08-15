
import FacilityPhoto from "./FacilityPageComponents/FacilityPhotos";
import FacilityHeader from "./FacilityPageComponents/FacilityPageHeader";
import FacilityInformation from "./FacilityPageComponents/FacilityAbout";
import FacilityNavigation from "./FacilityPageComponents/FacilityNavigation";

const SelectedFacilityPage = () => {

  return (
    <div className="facility-page-container">
      <FacilityHeader />
      <FacilityPhoto />
      <FacilityInformation />
      <FacilityNavigation />
    </div>
  )
}

export default SelectedFacilityPage;