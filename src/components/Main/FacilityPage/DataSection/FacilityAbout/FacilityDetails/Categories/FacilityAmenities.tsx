import { useSelector } from "react-redux";

import CheckmarkIcon from '../../../../../../../assets/icons/checkmark-icon.png';
import { amenitiesSelector } from "../../../../../../../redux/selectors/dataSelector";
import './_facility-categories.scss';

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
          <div className="facility-amenity-field" key={index}> 
            <div className="facility-checkmark">
              <img src={CheckmarkIcon} />
            </div>
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