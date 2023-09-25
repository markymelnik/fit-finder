import { useSelector } from "react-redux";

import CheckmarkIcon from '../../../../../../../assets/icons/checkmark-icon.png';
import { amenitiesSelector } from "../../../../../../../redux/selectors/dataSelector";

const FacilityAmenities = () => {

  const amenities = useSelector(amenitiesSelector);

  if (!amenities.length) {
    return (
      <div className="facility-amenities-container">
        <div className="facility-amenities-header">AMENITIES</div>
        <p className='no-offering'>No Amenities Found</p>
      </div>
    )
  }

  return (
    <div className="facility-amenities-container">
      <div className="facility-amenities-header">AMENITIES</div>
      {amenities.map((amenity: string, index: number) => {
        return (
          <div className="checkmark-container" key={index}> 
            <div className="facility-checkmark" style={{ backgroundImage: `url(${CheckmarkIcon})`}}></div>
            <div className="facility-amenity">
              {amenity}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FacilityAmenities;