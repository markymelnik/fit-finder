import { useSelector } from "react-redux/es/hooks/useSelector";
import { getFacilityCount } from "../../../../../redux/slices/facilitySlice";
import './_query-section.scss';

const QueryResultInfo = () => {

  const resultCount = useSelector(getFacilityCount); 
  const resultCountText = resultCount == 1 ? 'Result' : 'Results';

  return (
    <div className='query-info-container'>
      <div className="query-result-count">{resultCount} {resultCountText}</div>
    </div>
  )
};

export default QueryResultInfo;
