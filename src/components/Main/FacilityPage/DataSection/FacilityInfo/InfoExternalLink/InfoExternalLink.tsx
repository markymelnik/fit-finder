import { useSelector } from "react-redux";

import WebLinkSVG from "../../../../../../assets/svg/facility_page/WebLinkSVG";
import { RootState } from "../../../../../../redux/store";
import "./_info-external-link.scss";

const InfoExternalLink = () => {
  const selectedFacility = useSelector(
    (state: RootState) => state.selectedFacility.facilityData
  );

  if (!selectedFacility) return;

  return (
    <div className="info-external-link-wrapper">
      <a
        className="info-external-link"
        href={selectedFacility.webUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <WebLinkSVG />
        </span>
        {`Website`}
      </a>
    </div>
  );
};

export default InfoExternalLink;
