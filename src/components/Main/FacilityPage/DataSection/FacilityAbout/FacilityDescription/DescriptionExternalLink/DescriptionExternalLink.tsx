import { useSelector } from "react-redux";

import UpRightArrowSVG from "../../../../../../../assets/svg/arrows/UpRightArrowSVG";
import { RootState } from "../../../../../../../redux/store";
import "./_description-external-link.scss";

const DescriptionExternalLink = () => {
  const selectedFacility = useSelector(
    (state: RootState) => state.selectedFacility.facilityData
  );

  if (!selectedFacility) return;

  return (
    <div className="external-link-wrapper">
      <a
        className="description-external-link"
        href={selectedFacility.webUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Learn More`}
        <span>
          <UpRightArrowSVG />
        </span>
      </a>
    </div>
  );
};

export default DescriptionExternalLink;
