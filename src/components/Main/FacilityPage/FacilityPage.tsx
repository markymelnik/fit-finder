import { useSelector } from "react-redux";

import DataSection from "./DataSection/DataSection";
import FacilityName from "./FacilityName/FacilityName";
import PhotoSection from "./PhotoSection/PhotoSection";
import { RootState } from "../../../redux/store";
import BackButton from "../../common/button/nav/BackButton";
import './_facility-page.scss';

const FacilityPage = () => {

  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);

  return (
    <main className="facility-page-container">
      <FacilityName />
      <PhotoSection />
      <DataSection />
      {!isMobile && <BackButton />}
    </main>
  )
}

export default FacilityPage;