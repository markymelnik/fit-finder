import { useSelector } from "react-redux";

import WebLinkSVG from "../../../../../../assets/svg/facility_page/WebLinkSVG";
import { RootState } from "../../../../../../redux/store";
import "./_web-url.scss";

type WebUrlProps = {
  customClass: string;
};

const WebUrl = ({ customClass }: WebUrlProps) => {
  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.facilityData);

  if (!selectedFacility) return;

  return (
    <div className="facility-web-url">
      {customClass === "info-external-link" ? (
        <>
          <a
            className="external-link-icon"
            href={selectedFacility.webUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebLinkSVG />
          </a>
          <a
            className={customClass}
            href={selectedFacility.webUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`Website`}
          </a>
        </>
      ) : (
        <a
          className={customClass}
          href={selectedFacility.webUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Learn More`}
        </a>
      )}
    </div>
  );
};

export default WebUrl;
