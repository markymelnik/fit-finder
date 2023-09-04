import { useSelector } from "react-redux/es/hooks/useSelector";
import { getFacilityCount } from "../../../../../redux/slices/facilitySlice";
import './_query-section.scss';

const QuerySection = () => {

  const resultCount = useSelector(getFacilityCount); 
  const resultCountText = resultCount == 1 ? 'result' : 'results';

  return (
    <>
      <div className='query-section-container'>
        <div className="query-result-count">{resultCount} {resultCountText}</div>
      </div>
      <div className="query-section-divider-container">
        <div className="divider"></div>
      </div>
    </>
    
  )
};

export default QuerySection;
