import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../../redux/store";
import Dropdown from "./Dropdown";

interface filterButtonProps {
  fetchAll: () => any;
  selector: (state: RootState) => any;
  setSelected: (items: string[]) => any;
  entityName: string;
}
const FilterButton = ({ fetchAll, selector, setSelected, entityName }: filterButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch, fetchAll])

  const fetchedItems = useSelector(selector);
  const items = fetchedItems.allIds.map((id: number) => fetchedItems.byIds[id].name);

  const handleCheckboxClick = (option: string) => {
    
    let updatedItems;

    if (checkedItems.includes(option)) {
      updatedItems = checkedItems.filter(item => item !== option);
    } else {
      updatedItems = [...checkedItems, option];
    }

    setCheckedItems(updatedItems);
    dispatch(setSelected(updatedItems));

  };
  
  return (
    <Dropdown
      customClass={entityName.toLowerCase()}
      buttonName={entityName}
      options={items}
      checkedOptions={checkedItems}
      onCheckboxClick={handleCheckboxClick}
    />
  );
};

export default FilterButton;