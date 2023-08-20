import { useSelector } from "react-redux";
import { amenitiesSelector } from "../../../../redux/selectors/dataSelector"

const FacilityAmenities = () => {

  const amenities = useSelector(amenitiesSelector);

  if (!amenities.length) {
    return (
      <div className="facility-amenities-container">
        <div className="facility-amenities-header">AMENITIES</div>
        <p className='no-offering'>No Amenities Found</p>
      </div>
    )
  }

  return (
    <div className="facility-amenities-container">
      <div className="facility-amenities-header">AMENITIES</div>
      {amenities.map((amenity: string, index: number) => {
        return (
          <div className="facility-amenity" key={index}>
            {amenity}
          </div>
        )
      })}
    </div>
  )
}

export default FacilityAmenities;