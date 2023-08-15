import FacilityAmenities from "./FacilityAmenities";
import FacilityServices from "./FacilityServices";
import FacilityType from "./FacilityType";

const FacilityOfferings = () => {

  return (
    <div className="facility-offers">
      <FacilityType />
      <FacilityAmenities />
      <FacilityServices />
    </div>
  )
}

export default FacilityOfferings;