import { useSelector } from "react-redux";

import FacilityAmenities from "./Categories/FacilityAmenities";
import FacilityOfferings from "./Categories/FacilityOfferings";
import { RootState } from "../../../../../../redux/store";
import './_facility-details.scss';

const FacilityDetails = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.facilityData);

  if (!selectedFacility) return;

  return (
    <div className="facility-details-container">
      <div className="facility-details-header">Details</div>
      <div className="facility-details-categories">
        <FacilityAmenities />
        {selectedFacility.facilityType.id !== 1 && 
          <FacilityOfferings />
        }
      </div>
    </div>
  )
}

export default FacilityDetails;