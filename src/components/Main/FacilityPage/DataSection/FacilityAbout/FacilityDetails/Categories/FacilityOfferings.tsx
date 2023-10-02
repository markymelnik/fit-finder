import { useSelector } from "react-redux";

import CheckmarkIcon from '../../../../../../../assets/icons/checkmark-icon.png';
import { offeringsSelector } from "../../../../../../../redux/selectors/dataSelector";
import './_facility-categories.scss';

const FacilityOfferings = () => {

  const offerings = useSelector(offeringsSelector);

  if (!offerings.length) {
    return (
      <div className="facility-offerings-container">
        <div className="facility-offerings-header">OFFERINGS</div>
        <p className='no-offering'>No Offerings Found</p>
      </div>
    )
  }

  return (
    <div className="facility-offerings-container">
      <div className="facility-offerings-header">offerings</div>
      {offerings.map((service: string, index: number) => {
        return (
          <div className="facility-offerings-field" key={index}>
            <div className="facility-checkmark">
              <img src={CheckmarkIcon} />
            </div>
            <div className="facility-offering" >
              {service}
            </div>
          </div>   
        )
      })}
    </div>
  )
}

export default FacilityOfferings;