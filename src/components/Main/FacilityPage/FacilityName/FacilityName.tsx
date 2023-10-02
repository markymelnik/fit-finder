import { useSelector } from "react-redux";

import { RootState } from "../../../../redux/store";
import './_facility-name.scss';

const FacilityName = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return <p className="no-facility-found">Facility information not found.</p>;
  }

  return (
    <div className="facility-name-container">
      <div className="facility-name">{selectedFacility.name}</div>
    </div>
  );
};

export default FacilityName;
