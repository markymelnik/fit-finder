import { useSelector } from "react-redux";
import { servicesSelector } from "../../../../../../../redux/selectors/dataSelector";
import CheckmarkIcon from '../../../../../../../assets/icons/checkmark-icon.png';

const FacilityServices = () => {

  const services = useSelector(servicesSelector);

  if (!services.length) {
    return (
      <div className="facility-services-container">
        <div className="facility-services-header">SERVICES</div>
        <p className='no-offering'>No Services Found</p>
      </div>
    )
  }

  return (
    <div className="facility-services-container">
      <div className="facility-services-header">SERVICES</div>
      {services.map((service: string, index: number) => {
        return (
          <div className="checkmark-container" key={index}>
            <div className="facility-checkmark" style={{ backgroundImage: `url(${CheckmarkIcon})`}}></div>
            <div className="facility-service" >
              {service}
            </div>
          </div>   
        )
      })}
    </div>
  )
}

export default FacilityServices;