import { useState } from 'react';

interface Dropdown {
  customClass: string;
  buttonName: string;
  options: string[];
  checkedOptions: string[];
  onCheckboxClick: (option: string) => void;
}

const Dropdown = ({ buttonName, options, customClass, checkedOptions, onCheckboxClick }: Dropdown) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  
  const handleCheckboxChange = (option: string) => {
    onCheckboxClick(option);
  }

  return (
    <div className="dropdown-container">
      <button
        className={`${customClass}-dropdown-btn`}
        onMouseEnter={() => setDropdownVisible(true)}
      >
        {buttonName}
      </button>

      {dropdownVisible && (
        <div className={`${customClass}-dropdown`} onMouseLeave={() => setDropdownVisible(false)}>
          <ul className='dropdown-list'>
            {options.map((option, index) => (
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;