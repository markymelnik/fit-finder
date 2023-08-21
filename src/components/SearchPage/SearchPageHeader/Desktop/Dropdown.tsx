import { useState, useRef } from 'react';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import UpArrow from '../../../../assets/imgs/up-arrow.png';
import DownArrow from '../../../../assets/imgs/down-arrow.png';

interface Dropdown {
  allOptions: string[];
  checkedOptions: string[];
  onCheckboxClick: (option: string) => void;
  buttonName: string;
  dropdownTitle: string;
  customClass: string;
}

const Dropdown = ({ allOptions, checkedOptions, onCheckboxClick, buttonName, dropdownTitle,  customClass }: Dropdown) => {

  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => setDropdownVisible(false));
  
  const handleCheckboxChange = (option: string) => {
    onCheckboxClick(option);
  }

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        className={`${customClass}-dropdown-btn ${dropdownVisible ? 'active': ''}`}
        onClick={() => setDropdownVisible(prevVisible => !prevVisible)}
      >
        <div className="dropdown-button-text">{buttonName}</div>
        <img src={dropdownVisible ? UpArrow : DownArrow} alt="arrow "className="dropdown-arrow"></img>
      </button>

      {dropdownVisible && (
        <div className={`${customClass}-dropdown`}>
          <ul className='dropdown-list'>
            <div className="dropdown-title">{dropdownTitle}</div>
            {allOptions.map((option, index) => (
              <li key={index} className="dropdown-option">
                <input
                  className="option-checkbox"
                  type="checkbox"
                  checked={checkedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <div className="option-text">{option}</div>
              </li>
            ))}
            <button className="checkbox-done-btn" onClick={() => setDropdownVisible(false)}>Done</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;