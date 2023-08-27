import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
import CheckmarkIcon from '../../../../../../assets/icons/checkmark-icon.png';

const FacilityType = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return (
      <div className="facility-amenities-container">
        <div className="facility-amenities-header">TYPE</div>
        <p className='no-offering'>No Type Found</p>
      </div>
    )
  }

  return (
    <div className="facility-type-container">
      <div className="facility-type-header">TYPE</div>
      <div className="checkmark-container">
        <div className="facility-checkmark" style={{ backgroundImage: `url(${CheckmarkIcon})`}}></div>
        <div className="facility-type">
          {selectedFacility.facilityType.name}
        </div>
      </div>
      
    </div>
  )
}

export default FacilityType;