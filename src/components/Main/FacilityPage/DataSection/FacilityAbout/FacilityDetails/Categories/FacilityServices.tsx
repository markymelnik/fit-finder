import { useSelector } from "react-redux";

import CheckmarkIcon from '../../../../../../../assets/icons/checkmark-icon.png';
import { servicesSelector } from "../../../../../../../redux/selectors/dataSelector";
import './_facility-categories.scss';

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
          <div className="facility-services-field" key={index}>
            <div className="facility-checkmark">
              <img src={CheckmarkIcon} />
            </div>
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