import { useEffect, useState } from 'react';

interface Dropdown {
  customClass: string;
  buttonName: string;
  options: string[];
  onOptionSelected: (selected: string[]) => void;
}

const Dropdown = ({ buttonName, options, customClass, onOptionSelected }: Dropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    if (checkedItems.includes(option)) {
      setCheckedItems(prevState => prevState.filter(amenity => amenity != option));
    } else {
      setCheckedItems(prevState => [...prevState, option]);
    }
  }

  const handleOptionSelected = () => {
    onOptionSelected?.(checkedItems);
    setIsOpen(false);
    console.log(checkedItems);
  }

  return (
    <div className={`${customClass}-dropdown`} onMouseLeave={handleOptionSelected}>
      <button
        className={`${customClass}-dropdown-btn`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonName}
      </button>
      {isOpen && (
        <ul className='dropdown-list'>
          {options.map((option, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={checkedItems.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;