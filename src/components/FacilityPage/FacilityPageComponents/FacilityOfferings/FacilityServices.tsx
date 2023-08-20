import { useSelector } from "react-redux";
import { servicesSelector } from "../../../../redux/selectors/dataSelector"

const FacilityServices = () => {

  const services = useSelector(servicesSelector);

  if (!services.length) {
    return (
      <div className="facility-amenities-container">
        <div className="facility-amenities-header">SERVICES</div>
        <p className='no-offering'>No Services Found</p>
      </div>
    )
  }

  return (
    <div className="facility-services-container">
      <div className="facility-services-header">SERVICES</div>
      {services.map((service: string, index: number) => {
        return (
          <div className="facility-service" key={index}>
            {service}
          </div>
        )
      })}
    </div>
  )
}

export default FacilityServices;