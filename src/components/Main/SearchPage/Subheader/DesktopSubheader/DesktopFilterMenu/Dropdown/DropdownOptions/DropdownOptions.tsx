import { useState } from 'react';

import ToolTipSVG from '../../../../../../../../assets/svg/ToolTipSVG';
import SaveFiltersButton from '../../../../../../../common/button/search/SaveFiltersButton';
import './_dropdown-options.scss';

type DropdownOptionsProps = {
  allOptions: string[];
  checkedOptions: string[];
  onCheckboxClick: (option: string) => void;
  dropdownTitle: string;
  dropdownTipMessage: string;
  customClass: string;
  setDropdownVisible: (visible: boolean) => void;
}

const DropdownOptions = ({ allOptions, checkedOptions, onCheckboxClick, dropdownTitle, dropdownTipMessage, customClass, setDropdownVisible }: DropdownOptionsProps) => {

  const [isDropdownTipHovered, setIsDropdownTipCovered] = useState<boolean>(false);

  const handleCheckboxChange = (option: string) => {
    onCheckboxClick(option);
  }

  return (
    <div className={`${customClass}-dropdown`}>
      <ul className="dropdown-list">
        <div className="dropdown-list-top">
          <div className="dropdown-title">{dropdownTitle}</div>
          <div
            className="dropdown-tip-icon"
            onMouseEnter={() => setIsDropdownTipCovered(true)}
            onMouseLeave={() => setIsDropdownTipCovered(false)}
          >
            <ToolTipSVG />
              <div className={`dropdown-tip-message ${isDropdownTipHovered ? `active` : ``}`}>{dropdownTipMessage}</div>
          </div>
        </div>
        {allOptions.map((option, index) => (
          <li key={index} className="dropdown-option">
            <input
              name={`${customClass}-choice`}
              className="option-checkbox"
              type="checkbox"
              checked={checkedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <div className="option-text">{option}</div>
          </li>
        ))}
        <SaveFiltersButton
          customClass="checkbox-done-btn"
          buttonText="Done"
          onClick={() => {
            setDropdownVisible(false);
          }}
        />
      </ul>
    </div>
  );
};

export default DropdownOptions;