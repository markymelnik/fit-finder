import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllServices } from "../../../../redux/apiRequests";
import { AppDispatch, RootState } from "../../../../redux/store";
import Dropdown from "./Dropdown";
import { setSelectedServices } from "../../../../redux/filterSlice";

const ServiceButton = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [checkedServices, setCheckedServices] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchAllServices());
  }, [])

  const fetchedServices = useSelector((state: RootState) => state.services);
  const services = fetchedServices.allIds.map(id => fetchedServices.byIds[id].name);

  const handleCheckboxClick = (option: string) => {
    
    let updatedServices;

    if (checkedServices.includes(option)) {
      updatedServices = checkedServices.filter(item => item !== option);
    } else {
      updatedServices = [...checkedServices, option];
    }

    setCheckedServices(updatedServices);
    dispatch(setSelectedServices(updatedServices));

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
