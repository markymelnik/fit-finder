import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useEffect, useState } from "react";
import { fetchAllServices } from "../../../../redux/apiRequests";
import { setSelectedServices } from "../../../../redux/filterSlice";
import Dropdown from "./Dropdown";

const ServiceButton = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [checkedServices, setCheckedServices] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchAllServices());
  }, [])

  const fetchedServices = useSelector((state: RootState) => state.services);
  const services = fetchedServices.allIds.map(id => fetchedServices.byIds[id].name);

  const handleCheckboxClick = (option: string) => {
    
    let updatedAmenities;

    if (checkedServices.includes(option)) {
      updatedAmenities = checkedServices.filter(item => item !== option);
    } else {
      updatedAmenities = [...checkedServices, option];
    }

    setCheckedServices(updatedAmenities);
    dispatch(setSelectedServices(updatedAmenities));

  };

  return (
    <Dropdown
      customClass='service'
      buttonName='Services'
      options={services}
      checkedOptions={checkedServices}
      onCheckboxClick={handleCheckboxClick}
    />
  );
};

export default ServiceButton;
