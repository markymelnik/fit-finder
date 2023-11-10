import { ReactElement } from 'react';

import './_update-box.scss';
import UpRightArrowSVG from '../../../../../assets/svg/arrows/UpRightArrowSVG';

type UpdateBoxProps = {
  boxId: string;
  boxTitle: string;
  boxDescription: string;
  boxSvg: ReactElement;
  linkName?: string;
  linkText?: string;
  handleLinkClick?: () => void;
}

const UpdateBox = ({ boxId, boxTitle, boxDescription, boxSvg, linkName, linkText, handleLinkClick }: UpdateBoxProps) => {
  return (
    <div className={`update-box ${boxId}`}>
      <div className="update-box-top">
        <h4 className="update-box-title">{boxTitle}</h4>
        <p className="update-box-description">{boxDescription}</p>
      </div>
      <div className={`${boxId}-icon`}>{boxSvg}</div>
      <div className="update-box-bottom">
        <div onClick={handleLinkClick} className={linkName}>
          {linkText}
          <UpRightArrowSVG />
        </div>
      </div>
    </div>
  );
}

export default UpdateBox;