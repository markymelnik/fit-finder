import { useSelector } from "react-redux";

import CalisthenicsEquipmentSVG from "../../../../../../../assets/svg/facility_page/CalisthenicsEquipmentSVG";
import CheckMarkSVG from "../../../../../../../assets/svg/CheckmarkSVG";
import { amenitiesSelector } from "../../../../../../../redux/selectors/dataSelector";
import './_facility-categories.scss';
import { RootState } from "../../../../../../../redux/store";

const FacilityAmenities = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.facilityData);
  const amenities = useSelector(amenitiesSelector);

  if (!selectedFacility) return;

  if (selectedFacility.facilityType.id === 1) {
    return (
      <div className="facility-amenities-container">
        <div className="facility-amenities-header">Amenities</div>
        <div className="facility-amenity-field">
          <div className="facility-amenity-icon">
            <CalisthenicsEquipmentSVG />
          </div>
          <div className="facility-amenity">
            <div className="amenity-text-calisthenics">Calisthenics Equipment</div>
          </div>
        </div>
      </div>
    )
  }

  if (!amenities.length) return;

  return (
    <div className="facility-amenities-container">
      <div className="facility-amenities-header">Amenities</div>
      {amenities.map((amenity: string, index: number) => {
        return (
          <div className="facility-amenity-field" key={index}> 
            <div className="facility-amenity-icon">
              <CheckMarkSVG />
            </div>
            <div className="facility-amenity-text">{amenity}</div>
          </div>
        )
      })}
    </div>
  )
}

export default FacilityAmenities;