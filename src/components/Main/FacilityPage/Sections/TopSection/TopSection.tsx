import { useSelector } from "react-redux";

import { RootState } from "../../../../../redux/store";
import './_top-section.scss';

const FacilityTopDescription = () => {

  const selectedFacility: any = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return <p className="no-facility-found">Facility information not found.</p>
  }

  return (
    <div className="top-section-container">
      <div className='facility-name'>{selectedFacility.name}</div>
      <div className="facility-neighborhood">{selectedFacility.neighborhood.name.toUpperCase()}</div>
    </div>
  );
};

export default FacilityTopDescription;
