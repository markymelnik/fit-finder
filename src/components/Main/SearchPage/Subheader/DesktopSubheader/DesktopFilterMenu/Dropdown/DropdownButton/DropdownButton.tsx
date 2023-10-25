import { useEffect, useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import DownArrow from '../../../../../../../../assets/icons/arrows/down-arrow.png';
import UpArrow from '../../../../../../../../assets/icons/arrows/up-arrow.png';
import DeleteIcon from '../../../../../../../../assets/icons/search/delete-icon.png';
import useFacilitySearch from "../../../../../../../../hooks/useFacilitySearch";
import useOutsideClick from "../../../../../../../../hooks/useOutsideClick";
import { AppDispatch, RootState } from "../../../../../../../../redux/store";
import DropdownOptions from "../DropdownOptions/DropdownOptions";
import './_dropdown-btn.scss';

type DropdownButtonProps = {
  fetchAllOptionsFromGlobalState: (state: RootState) => any;
  setSelectedOptions: (allOptions: string[]) => any;
  resetSelectedOptions: () => any;
  fetchSelectedOptions: (state: RootState) => string[];
  entityName: string;
  dropdownTitle: string;
  dropdownTipMessage: string;
}

const DropdownButton = ({ fetchAllOptionsFromGlobalState, setSelectedOptions, resetSelectedOptions, fetchSelectedOptions, entityName, dropdownTitle, dropdownTipMessage }: DropdownButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();
  const { executeSearch } = useFacilitySearch();

  const allFetchedOptions = useSelector(fetchAllOptionsFromGlobalState);
  const allOptions = allFetchedOptions.allIds.map((id: number) => allFetchedOptions.byIds[id].name);
  const globalCheckedOptions = useSelector(fetchSelectedOptions);

  useEffect(() => {
    executeSearch();
  }, [globalCheckedOptions]);

  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => {
    if (dropdownVisible) {
      setDropdownVisible(false)
    }
  });

  const handleCheckboxClick = (newlyCheckedOption: string) => {

    let updatedCheckedOptions;

    if (globalCheckedOptions.includes(newlyCheckedOption)) {
      updatedCheckedOptions = globalCheckedOptions.filter(currentlyCheckedOption => currentlyCheckedOption !== newlyCheckedOption);
    } else {
      updatedCheckedOptions = [...globalCheckedOptions, newlyCheckedOption];
    }

    dispatch(setSelectedOptions(updatedCheckedOptions));
  };

  const handleClearChecks = () => {
    dispatch(resetSelectedOptions());
    setDropdownVisible(prevVisible => !prevVisible);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        className={`${entityName.toLowerCase()}-dropdown-btn ${dropdownVisible ? 'active': ''} ${globalCheckedOptions.length > 0 ? 'with-delete-icon' : ''}`}
        onClick={() => setDropdownVisible(prevVisible => !prevVisible)}
      >
        <div className="dropdown-btn-content">
          <div className="dropdown-btn-checkedcount">
          {globalCheckedOptions.length > 0 ? `${globalCheckedOptions.length}` : ''}
          </div>
          <div className="dropdown-btn-text">
            {entityName} 
          </div>
        </div>
        <img src={dropdownVisible ? UpArrow : DownArrow} alt="arrow" className="dropdown-btn-arrow"></img>
        {
          globalCheckedOptions.length > 0 && 
          <div 
            className="dropdown-btn-delete" 
            onClick={handleClearChecks} 
            style={{ backgroundImage: `url(${DeleteIcon})`}}
          >
          </div>
        }
      </button>
      {dropdownVisible && (
        <DropdownOptions
          allOptions={allOptions}
          checkedOptions={globalCheckedOptions}
          onCheckboxClick={handleCheckboxClick}
          dropdownTitle={dropdownTitle}
          dropdownTipMessage={dropdownTipMessage}
          customClass={entityName.toLowerCase()}
          setDropdownVisible={setDropdownVisible}
        />
      )}
    </div>
  );
};

export default DropdownButton;