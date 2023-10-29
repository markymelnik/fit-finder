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
        {allOptions.map((option: string, index: number) => (
        <li key={index} className="dropdown-option">
          <label className="option-checkbox" htmlFor={`checkbox-${index}`}>
            <input
              id={`checkbox-${index}`}
              name={`${customClass}-choice`}
              type="checkbox"
              checked={checkedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <span className="custom-checkbox">
              <div className="custom-checkbox-text">{option}</div>
            </span>
          </label>
        </li>
        ))}
        <SaveFiltersButton
          customClass="dropdown-done-btn"
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