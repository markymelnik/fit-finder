import { useSelector } from "react-redux/es/hooks/useSelector";

import { RootState } from "../../../../../../redux/store";
import './_query-section.scss';

const QuerySection = () => {

  const { totalElements, totalPages, currentPage } = useSelector((state: RootState) => state.pagination);

  const totalCountText = totalElements == 1 ? 'result' : 'results';

  return (
    <>
      <div className='query-section-container'>
        <div className="query-result-count">{totalElements} {totalCountText}</div>
        <div className="query-result-page">Page {currentPage} of {totalPages}</div>
      </div>
      <div className="query-section-divider-container">
        <div className="divider"></div>
      </div>
    </>
    
  )
};

export default QuerySection;
