import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchAllAmenities } from "../../../../redux/apiRequests";
import { AppDispatch, RootState } from "../../../../redux/store";
import Dropdown from "./Dropdown";
import { setSelectedAmenities } from "../../../../redux/filterSlice";

const AmenityButton = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [checkedAmenities, setCheckedAmenities] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchAllAmenities());
  }, [])

  const fetchedAmenities = useSelector((state: RootState) => state.amenities);
  const amenities = fetchedAmenities.allIds.map(id => fetchedAmenities.byIds[id].name);

  const handleCheckboxClick = (option: string) => {
    
    let updatedAmenities;

    if (checkedAmenities.includes(option)) {
      updatedAmenities = checkedAmenities.filter(item => item !== option);
    } else {
      updatedAmenities = [...checkedAmenities, option];
    }

    setCheckedAmenities(updatedAmenities);
    dispatch(setSelectedAmenities(updatedAmenities));

  };
  
  return (
    <Dropdown
      customClass='amenity'
      buttonName='Amenities'
      options={amenities}
      checkedOptions={checkedAmenities}
      onCheckboxClick={handleCheckboxClick}
    />
  );
};

export default AmenityButton;
