import { useSelector } from "react-redux";

import CheckMarkSVG from "../../../../../../../assets/svg/CheckMarkSVG";
import { offeringsSelector } from "../../../../../../../redux/selectors/dataSelector";
import './_facility-categories.scss';

const FacilityOfferings = () => {

  const offerings = useSelector(offeringsSelector);

  if (!offerings.length) return;

  return (
    <div className="facility-offerings-container">
      <div className="facility-offerings-header">Offerings</div>
      {offerings.map((service: string, index: number) => {
        return (
          <div className="facility-offerings-field" key={index}>
            <div className="facility-offering-icon">
              <CheckMarkSVG />
            </div>
            <div className="facility-offering-text">{service}</div>
          </div>   
        )
      })}
    </div>
  )
}

export default FacilityOfferings;