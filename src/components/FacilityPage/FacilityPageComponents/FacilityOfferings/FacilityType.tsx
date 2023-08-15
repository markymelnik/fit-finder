import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const FacilityType = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return <p>Facility type not found.</p>
  }

  return (
    <div className="facility-type-container">
      <div className="facility-type-header">TYPE</div>
      <div className="facility-type">
        {selectedFacility.facilityType.name}
      </div>
    </div>
  )
}

export default FacilityType;