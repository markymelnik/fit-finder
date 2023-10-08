import { useSelector } from "react-redux";

import "./_facility-description.scss";
import { RootState } from "../../../../../../redux/store";
import WebUrl from "../../FacilityInfo/WebUrl/WebUrl";

const FacilityDescription = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return <div>Error!</div>
  }

  return (
    <div className="facility-description-container">
      <div className="facility-description-header">About</div>
      <p className="facility-description-text">
        {selectedFacility.description}
      </p>
      <WebUrl customClass='about-external-link' />
    </div>
  );
};

export default FacilityDescription;
