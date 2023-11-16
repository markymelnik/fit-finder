import FacilityAddress from "./FacilityAddress/FacilityAddress";
import FacilityType from "./FacilityType/FacilityType";
import InfoExternalLink from "./InfoExternalLink/InfoExternalLink";
import "./_facility-info.scss";

const FacilityInfo = () => {
  return (
    <div className="facility-info">
      <FacilityType />
      <FacilityAddress />
      <InfoExternalLink />
    </div>
  );
};

export default FacilityInfo;
