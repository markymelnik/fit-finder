import { useSelector } from "react-redux/es/hooks/useSelector";

import { RootState } from "../../../../../../redux/store";
import ArrowNext from "../PaginationBar/ArrowNext";
import ArrowPrev from "../PaginationBar/ArrowPrev";
import './_query-section.scss';
import SectionDivider from "../SectionDivider/SectionDivider";

const QuerySection = () => {

  const { totalElements, totalPages, currentPage } = useSelector((state: RootState) => state.pagination);

  const totalCountText = totalElements == 1 ? 'Result' : 'Results';

  return (
    <>
      <div className='query-section-container'>
        <div className="query-result-count">{totalElements} {totalCountText}</div>
        <div className="query-result-right">
         <div className="query-result-page">Page {currentPage} of {totalPages}</div>
         <div className="query-result-arrows">
          <ArrowPrev customClass="query-result-prev-arrow"/>
          <ArrowNext customClass="query-result-next-arrow"/>
         </div>
        </div>
      </div>
      <SectionDivider />
    </>
    
  )
};

export default QuerySection;
