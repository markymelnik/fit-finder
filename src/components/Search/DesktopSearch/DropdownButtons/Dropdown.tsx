import { useState } from 'react';

interface DropdownProps {
  customClass: string;
  buttonName: string;
  options: string[];
  onOptionSelected: (selected: string) => void;
}

const Dropdown = ({ buttonName, options, customClass, onOptionSelected }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`${customClass}-dropdown`} onMouseLeave={() => setIsOpen(false)}>
      <button
        className={`${customClass}-dropdown-btn`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonName}
      </button>
      {isOpen && (
        <ul className='dropdown-list'>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setIsOpen(false);
                onOptionSelected?.(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;