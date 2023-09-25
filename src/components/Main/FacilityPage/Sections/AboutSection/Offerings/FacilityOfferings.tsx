import FacilityAmenities from "./Categories/FacilityAmenities";
import FacilityServices from "./Categories/FacilityServices";
import FacilityType from "./Categories/FacilityType";
import './_facility-offerings.scss';

const FacilityOfferings = () => {

  return (
    <div className="facility-offerings">
      <FacilityType />
      <FacilityAmenities />
      <FacilityServices />
    </div>
  )
}

export default FacilityOfferings;