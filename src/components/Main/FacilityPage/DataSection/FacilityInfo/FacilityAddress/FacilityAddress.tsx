import { useSelector } from 'react-redux';

import AddressLinkSVG from './AddressLinkSVG';
import { RootState } from '../../../../../../redux/store';
import './_facility-address.scss';

const FacilityAddress = () => {
  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.facilityData);
  
  if (!selectedFacility) return;
  
  const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${selectedFacility.address}, ${selectedFacility.neighborhood.borough.name}, NY, ${selectedFacility.postalCode}`
  )}`;

  return (
    <div className="facility-address-container">
      <div className="facility-address">
        <div className="address-link-icon">
          <AddressLinkSVG />
        </div>
        <a href={googleMapsURL} target="_blank" rel="noopener noreferrer">
          {`${selectedFacility.address}, ${selectedFacility.neighborhood.borough.name}, NY, ${selectedFacility.postalCode}`}
        </a>
      </div>
    </div>
  )
}

export default FacilityAddress;