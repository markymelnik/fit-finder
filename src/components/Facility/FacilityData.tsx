import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const FacilityData = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  return (
    <div className='facility-information'>
      <div className='facility-name'>{selectedFacility?.name}</div>
      <div className='facility-type'>{selectedFacility?.type}</div>
      <div className='facility-address'>{selectedFacility?.address}</div>
    </div>
  );
};

export default FacilityData;
