import { useSelector } from "react-redux";

import CheckmarkIcon from '../../../../.././../assets/icons/checkmark-icon.png';
import { RootState } from "../../../../../../redux/store";
import './_facility-type.scss';

const FacilityType = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return (
      <div className="facility-type-container">
        <p className='no-offering'>No Type Found</p>
      </div>
    )
  }

  return (
    <div className="facility-type-container">
      <div className="facility-type-icon">
        <img src={CheckmarkIcon} />
      </div>
      <div className="facility-type">
        {selectedFacility.facilityType.name}
      </div>
    </div>
  )
}

export default FacilityType;