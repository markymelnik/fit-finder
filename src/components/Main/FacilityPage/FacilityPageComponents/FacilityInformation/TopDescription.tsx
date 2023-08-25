import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

const TopDescription = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return <p className="no-facility-found">Facility information not found.</p>
  }

  return (
    <div className="facility-page-header">
      <div className='facility-name'>{selectedFacility.name}</div>
      <div className='facility-address'>{selectedFacility.address}, {selectedFacility.postalCode}</div>
      <div className="facility-contact">
        <div className="facility-website">Visit website</div>
        <div className="facility-phone-number">1(123)456-7890</div>
      </div>
    </div>
  );
};

export default TopDescription;
