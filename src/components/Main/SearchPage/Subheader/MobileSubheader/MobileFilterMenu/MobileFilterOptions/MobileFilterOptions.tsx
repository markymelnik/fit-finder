import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import useFacilitySearch from "../../../../../../../hooks/useFacilitySearch";
import { resetPagination } from "../../../../../../../redux/slices/paginationSlice";
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

  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);

  const allFetchedOptions = useSelector(fetchAllOptionsFromGlobalState);
  const allOptions = allFetchedOptions.allIds.map((id: number) => allFetchedOptions.byIds[id].name);
  const globalCheckedOptions = useSelector(fetchSelectedOptions);

  useEffect(() => {
    if (location.pathname === '/search') {
      executeSearch(currentPage);
    }
  }, [globalCheckedOptions]);

  const handleCheckboxChange = (newlyCheckedOption: string) => {

    let updatedCheckedOptions;

    if (globalCheckedOptions.includes(newlyCheckedOption)) {
      updatedCheckedOptions = globalCheckedOptions.filter(currentlyCheckedOption => currentlyCheckedOption !== newlyCheckedOption);
    } else {
      updatedCheckedOptions = [...globalCheckedOptions, newlyCheckedOption];
    }

    dispatch(resetPagination());
    dispatch(setSelectedOptions(updatedCheckedOptions));
  };

  return (
    <div className="mobile-filter-options-container">
      
        <div className="mobile-filter-options-top">
          <div className="mobile-filter-options-title">{categoryTitle}</div>
          <div className="mobile-filter-options-description">{categoryDescription}</div>
        </div>
        <ul className="mobile-filter-options-list">
        {allOptions.map((option: string, index: number) => (
          <li key={index} className="mobile-filter-option">
            <label className="option-checkbox" htmlFor={`${option}-checkbox-${index}`}>
              <input
                id={`${option}-checkbox-${index}`}
                name={`${entityName}-choice`}
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
