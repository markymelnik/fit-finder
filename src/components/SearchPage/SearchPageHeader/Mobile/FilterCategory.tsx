import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface categoryTitleProps {
  fetchAll: () => any;
  selector: (state: RootState) => any;
  setSelected: (items: string[]) => any;
  entityName: string;
  categoryTitle: string;
}

const FilterCategory = ({ fetchAll, selector, setSelected, categoryTitle }: categoryTitleProps) => {

  const dispatch = useDispatch<AppDispatch>();
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch, fetchAll])

  const fetchedOptions = useSelector(selector);
  const options = fetchedOptions.allIds.map((id: number) => fetchedOptions.byIds[id].name);

  const handleCheckboxChange = (option: string) => {

    let updatedOptions;

    if (checkedOptions.includes(option)) {
      updatedOptions = checkedOptions.filter(item => item !== option);
    } else {
      updatedOptions = [...checkedOptions, option];
    }

    setCheckedOptions(updatedOptions);
    dispatch(setSelected(updatedOptions));

  };

  return (
    <div className="filter-category-container">
      <ul className="filter-category-list">
        <div className="filter-category-title">{categoryTitle}</div>
        {options.map((option: string, index: number) => (
          <li key={index} className="filter-category-option">
            <input 
              className="filter-option-checkbox"
              type="checkbox"
              checked={checkedOptions.includes(option)}
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
