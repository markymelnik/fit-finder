import { useSelector } from "react-redux";

import FacilityDescription from "./FacilityDescription/FacilityDescription";
import FacilityDetails from "./FacilityDetails/FacilityDetails";
import { RootState } from "../../../../../redux/store";
import DataDivider from "../DataDivider/DataDivider";
import "./_facility-about.scss";

const FacilityAbout = () => {

  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);

  return (
    <div className="facility-about-section-container">
      <FacilityDescription />
      {isMobile && <DataDivider />}
      <FacilityDetails />
    </div>
  );
};

export default FacilityAbout;
