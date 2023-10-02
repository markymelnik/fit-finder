import { useSelector } from "react-redux";

import ExternalLinkSVG from "./ExternalLinkSVG";
import { RootState } from "../../../../../../redux/store";
import "./_web-url.scss";

const WebUrl = () => {
  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return <div>Error!</div>
  }

  return (
    <div className="facility-web-url">
      <a
        className='external-link-icon'
        href={selectedFacility.webUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLinkSVG />
      </a>
      <a
        className="external-link"
        href={selectedFacility.webUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Website`}
      </a>
    </div>
  );
};

export default WebUrl;
