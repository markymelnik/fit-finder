import FacilityAddress from './FacilityAddress/FacilityAddress';
import FacilityType from './FacilityType/FacilityType';
import WebUrl from './WebUrl/WebUrl';
import './_facility-info.scss';

const FacilityInfo = () => {
  return (
    <div className="facility-info-container">
      <div className="facility-info-left">
        <FacilityType />
        <FacilityAddress />
        <WebUrl />
      </div>
    </div>
  )
}

export default FacilityInfo;