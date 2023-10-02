import DataSection from "./DataSection/DataSection";
import FacilityName from "./FacilityName/FacilityName";
import PhotoSection from "./PhotoSection/PhotoSection";
import BackButton from "../../common/button/nav/BackButton";

import './_facility-page.scss';

const FacilityPage = () => {

  return (
    <main className="facility-page-container">
      <FacilityName />
      <PhotoSection />
      <DataSection />
      <BackButton />
    </main>
  )
}

export default FacilityPage;