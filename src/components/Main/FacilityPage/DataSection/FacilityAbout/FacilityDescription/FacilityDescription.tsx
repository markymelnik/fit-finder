import { useSelector } from "react-redux";

import DescriptionExternalLink from "./DescriptionExternalLink/DescriptionExternalLink";
import { RootState } from "../../../../../../redux/store";
import "./_facility-description.scss";

const FacilityDescription = () => {
  const selectedFacility = useSelector(
    (state: RootState) => state.selectedFacility.facilityData
  );

  if (!selectedFacility) return;

  return (
    <div className="facility-description-container">
      <div className="facility-description-header">About</div>
      <p className="facility-description-text">
        {selectedFacility.description}
      </p>
      <DescriptionExternalLink />
    </div>
  );
};

export default FacilityDescription;
