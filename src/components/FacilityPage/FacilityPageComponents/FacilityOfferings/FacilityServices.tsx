import { useSelector } from "react-redux";
import { servicesSelector } from "../../../../redux/selectors/dataSelector"

const FacilityServices = () => {

  const services = useSelector(servicesSelector);

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