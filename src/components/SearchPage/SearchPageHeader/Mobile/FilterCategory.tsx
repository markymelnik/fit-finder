import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface categoryTitleProps {
  fetchAllOptionsFromDatabase: () => any;
  fetchAllOptionsFromGlobalState: (state: RootState) => any;
  setSelectedOptions: (items: string[]) => any;
  fetchSelectedOptions: (state: RootState) => string[];
  entityName: string;
  categoryTitle: string;
}

const FilterCategory = ({ fetchAllOptionsFromDatabase, fetchAllOptionsFromGlobalState, setSelectedOptions, fetchSelectedOptions, categoryTitle }: categoryTitleProps) => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllOptionsFromDatabase());
  }, [dispatch, fetchAllOptionsFromDatabase])

  const allFetchedOptions = useSelector(fetchAllOptionsFromGlobalState);
  const allOptions = allFetchedOptions.allIds.map((id: number) => allFetchedOptions.byIds[id].name);
  const globalCheckedOptions = useSelector(fetchSelectedOptions);

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
    <div className="filter-category-container">
      <ul className="filter-category-list">
        <div className="filter-category-title">{categoryTitle}</div>
        {allOptions.map((option: string, index: number) => (
          <li key={index} className="filter-category-option">
            <input 
              className="filter-option-checkbox"
              type="checkbox"
              checked={globalCheckedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <div className="filter-option-text">{option}</div>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default FilterCategory;
