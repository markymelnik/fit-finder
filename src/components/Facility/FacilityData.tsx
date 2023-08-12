import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { servicesSelector, amenitiesSelector } from "../../redux/selectors/dataSelector";

const FacilityData = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);
  const amenities = useSelector(amenitiesSelector);
  const services = useSelector(servicesSelector);

  if (!selectedFacility) {
    return <p>Facility not found.</p>
  }

  return (
    <div className='facility-information'>
      <div className='facility-name'>{selectedFacility.name}</div>
      <div className='facility-type'>{selectedFacility.type}</div>
      <div className='facility-address'>{selectedFacility.address}</div>
      {amenities.map((amenity: string, index: number) => {
        return (
          <div className="facility-amenity" key={index}>
            {amenity}
          </div>
        )
      })}
      {services.map((service: string, index: number) => {
        return (
          <div className="facility-service" key={index}>
            {service}
          </div>
        )
      })}
    </div>
  );
};

export default FacilityData;
