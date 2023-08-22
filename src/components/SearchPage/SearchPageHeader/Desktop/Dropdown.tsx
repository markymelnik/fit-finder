import { useState, useRef } from 'react';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import UpArrow from '../../../../assets/imgs/up-arrow.png';
import DownArrow from '../../../../assets/imgs/down-arrow.png';
import SaveFiltersButton from '../../../SaveFiltersButton';
import DeleteIcon from '../../../../assets/imgs/delete-icon.png';

interface Dropdown {
  allOptions: string[];
  checkedOptions: string[];
  onCheckboxClick: (option: string) => void;
  onClearChecks: () => void;
  checkedCount: number;
  buttonName: string;
  dropdownTitle: string;
  customClass: string;
}

const Dropdown = ({ allOptions, checkedOptions, onCheckboxClick, checkedCount, onClearChecks, buttonName, dropdownTitle,  customClass }: Dropdown) => {

  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => setDropdownVisible(false));
  
  const handleCheckboxChange = (option: string) => {
    onCheckboxClick(option);
  }

  const handleClearChecks = () => {
    onClearChecks();
  }

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        className={`${customClass}-dropdown-btn ${dropdownVisible ? 'active': ''} ${checkedCount > 0 ? 'with-delete-icon' : ''}`}
        onClick={() => setDropdownVisible(prevVisible => !prevVisible)}
      >
        <div className="dropdown-btn-content-container">
          <div className="dropdown-btn-checkedcount">
          {checkedCount > 0 ? `${checkedCount}` : ''}
          </div>
          <div className="dropdown-btn-text">
            {buttonName} 
          </div>
        </div>
        <img src={dropdownVisible ? UpArrow : DownArrow} alt="arrow "className="dropdown-arrow"></img>
        {
          checkedCount > 0 && 
          <div 
            className="dropdown-btn-delete" 
            onClick={handleClearChecks} 
            style={{ backgroundImage: `url(${DeleteIcon})`}}
          >
          </div>
        }
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
            <SaveFiltersButton customClass='checkbox-done-btn' buttonText='Done' exitMobileFilterMenu={() => setDropdownVisible(false)}/>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;