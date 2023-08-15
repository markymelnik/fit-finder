import { useSelector } from "react-redux/es/hooks/useSelector";
import { getFacilityCount } from "../../redux/slices/facilitySlice";

const QueryInformation = () => {

  const resultCount = useSelector(getFacilityCount); 
  const resultCountText = resultCount == 1 ? 'Result' : 'Results';

  return (
    <div className='query-info-container'>
      <div className="query-result-count">{resultCount} {resultCountText}</div>
    </div>
  )
};

export default QueryInformation;
