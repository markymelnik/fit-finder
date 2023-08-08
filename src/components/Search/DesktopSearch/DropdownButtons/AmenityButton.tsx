import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllAmenities } from "../../../../redux/apiRequests";
import { AppDispatch, RootState } from "../../../../redux/store";
import Dropdown from "./Dropdown";

const AmenityButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllAmenities());
  }, [])

  const fetchedAmenities = useSelector((state: RootState) => state.amenities);
  const amenities = fetchedAmenities.allIds.map(id => fetchedAmenities.byIds[id].name);
  console.log(amenities);
  
  return (
    <Dropdown
      customClass='amenity'
      buttonName='Amenities'
      options={amenities}
      onOptionSelected={(selected) => {
        console.log(`Selected amenity: ${selected}`);
      }}
    />
  );
};

export default AmenityButton;
