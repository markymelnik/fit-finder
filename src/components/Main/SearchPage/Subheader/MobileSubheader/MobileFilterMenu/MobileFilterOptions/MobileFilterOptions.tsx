import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import useFacilitySearch from "../../../../../../../hooks/useFacilitySearch";
import { AppDispatch, RootState } from "../../../../../../../redux/store";
import './_mobile-filter-options.scss';

interface MobileFilterOptionsProps {
  fetchAllOptionsFromGlobalState: (state: RootState) => any;
  setSelectedOptions: (items: string[]) => any;
  fetchSelectedOptions: (state: RootState) => string[];
  entityName: string;
  categoryTitle: string;
  categoryDescription: string;
}

const MobileFilterOptions = ({ fetchAllOptionsFromGlobalState, setSelectedOptions, fetchSelectedOptions, entityName, categoryTitle, categoryDescription, }: MobileFilterOptionsProps) => {

  const dispatch = useDispatch<AppDispatch>();
  const { executeSearch } = useFacilitySearch();

  const allFetchedOptions = useSelector(fetchAllOptionsFromGlobalState);
  const allOptions = allFetchedOptions.allIds.map((id: number) => allFetchedOptions.byIds[id].name);
  const globalCheckedOptions = useSelector(fetchSelectedOptions);

  useEffect(() => {
    if (location.pathname === '/search') {
      executeSearch();
    }
  }, [globalCheckedOptions]);

  const handleCheckboxChange = (newlyCheckedOption: string) => {

    let updatedCheckedOptions;

    if (globalCheckedOptions.includes(newlyCheckedOption)) {
      updatedCheckedOptions = globalCheckedOptions.filter(currentlyCheckedOption => currentlyCheckedOption !== newlyCheckedOption);
    } else {
      updatedCheckedOptions = [...globalCheckedOptions, newlyCheckedOption];
    }

    dispatch(setSelectedOptions(updatedCheckedOptions));
  };

  return (
    <div className="mobile-filter-options-container">
      <ul className="mobile-filter-options-list">
        <div className="mobile-filter-options-top">
          <div className="mobile-filter-options-title">{categoryTitle}</div>
          <div className="mobile-filter-options-description">{categoryDescription}</div>
        </div>
        {allOptions.map((option: string, index: number) => (
          <li key={index} className="mobile-filter-option">
            <label className="option-checkbox" htmlFor={`checkbox-${index}`}>
              <input
                id={`checkbox-${index}`}
                name={`${entityName}-choice`}
                className="mobile-filter-option-checkbox"
                type="checkbox"
                checked={globalCheckedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span className="custom-checkbox">
                <div className="custom-checkbox-text">{option}</div>
              </span>
            </label>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default MobileFilterOptions;
