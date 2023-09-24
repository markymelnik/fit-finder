import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../../../../../redux/store";
import Dropdown from "../Dropdown/ButtonDropdown";

interface FilterButtonProps {
  fetchAllOptionsFromDatabase: () => any;
  fetchAllOptionsFromGlobalState: (state: RootState) => any;
  setSelectedOptions: (allOptions: string[]) => any;
  fetchSelectedOptions: (state: RootState) => string[];
  entityName: string;
  dropdownTitle: string;
}

const FilterButton = ({ fetchAllOptionsFromDatabase, fetchAllOptionsFromGlobalState, setSelectedOptions, fetchSelectedOptions, entityName, dropdownTitle }: FilterButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchAllOptionsFromDatabase());
  }, [dispatch, fetchAllOptionsFromDatabase]);

  const allFetchedOptions = useSelector(fetchAllOptionsFromGlobalState);
  const allOptions = allFetchedOptions.allIds.map((id: number) => allFetchedOptions.byIds[id].name);
  const globalCheckedOptions = useSelector(fetchSelectedOptions);

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
    dispatch(setSelectedOptions([]));
  }
  
  return (
    <Dropdown
      allOptions={allOptions}
      checkedOptions={globalCheckedOptions}
      onCheckboxClick={handleCheckboxClick}
      checkedCount={globalCheckedOptions.length}
      onClearChecks={handleClearChecks}
      buttonName={entityName}
      dropdownTitle={dropdownTitle}
      customClass={entityName.toLowerCase()}
    />
  );
};

export default FilterButton;