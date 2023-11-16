import { useSelector } from "react-redux";

import AddressLinkSVG from "../../../../../../assets/svg/facility_page/AddressLinkSVG";
import { RootState } from "../../../../../../redux/store";
import "./_facility-address.scss";

const FacilityAddress = () => {
  const selectedFacility = useSelector(
    (state: RootState) => state.selectedFacility.facilityData
  );

  if (!selectedFacility) return;

  const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${selectedFacility.address}, ${selectedFacility.neighborhood.borough.name}, NY, ${selectedFacility.postalCode}`
  )}`;

  return (
    <div className="facility-address-wrapper">
      <a
        className="facility-address"
        href={googleMapsURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <AddressLinkSVG />
        </span>
        {`${selectedFacility.address}, ${selectedFacility.neighborhood.borough.name}, NY, ${selectedFacility.postalCode}`}
      </a>
    </div>
  );
};

export default FacilityAddress;
