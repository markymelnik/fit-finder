import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import ArrowNext from "./ArrowNext";
import ArrowPrev from "./ArrowPrev";
import DoubleArrowNextSVG from "./DoubleArrowNextSVG";
import DoubleArrowPrevSVG from "./DoubleArrowPrevSVG";
import getDisplayedNumbers from "./getDisplayedNumbers";
import { setCurrentPage } from "../../../../../../redux/slices/paginationSlice";
import { RootState } from "../../../../../../redux/store";
import "./_pagination-bar.scss";

const PaginationBar = () => {

  const dispatch = useDispatch();
  const { currentPage, totalPages, totalElements } = useSelector((state: RootState) => state.pagination);
  const displayedNumbers = getDisplayedNumbers(currentPage, totalPages);

  const upperNum = currentPage === totalPages ? totalElements : currentPage * 12;
  const lowerNum = currentPage === 1 ? 1 : (currentPage - 1) * 12;

  const handleToStartButtonClick = () => {
    dispatch(setCurrentPage(1));
  };

  

  const handleToEndButtonClick = () => {
    dispatch(setCurrentPage(totalPages));
  };

  return (
    <div className="pagination-bar-container">
      <div className="pagination-bar">
        <div
          className={`pagination-to-start-btn ${currentPage === 1 ? `disabled` : ``}`}
          onClick={handleToStartButtonClick}
        >
          <DoubleArrowPrevSVG />
        </div>
        <ArrowPrev customClass="pagination-prev-btn"/>
        <div className="pagination-number-display">
          {displayedNumbers.map((number) => (
            <div
              className={`nav-number ${number === currentPage ? `active` : ``}`}
              key={number.toString()}
              onClick={() => dispatch(setCurrentPage(number))}
            >
              {number}
            </div>
          ))}
          {displayedNumbers[2] < totalPages - 1 && (
            <span className="ellipsis">...</span>
          )}
          {totalPages > 3 && !displayedNumbers.includes(totalPages) && (
            <div
              className={`nav-number ${
                currentPage === totalPages ? `active` : ``
              }`}
              onClick={() => dispatch(setCurrentPage(totalPages))}
            >
              {totalPages}
            </div>
          )}
        </div>
        <ArrowNext customClass="pagination-next-btn" />
        <div
          className={`pagination-to-end-btn ${
            currentPage === totalPages ? `disabled` : ``
          }`}
          onClick={handleToEndButtonClick}
        >
          <DoubleArrowNextSVG />
        </div>
      </div>
      <div className="pagination-results-container">
        <div className="pagination-results-text">{lowerNum} - {upperNum} of {totalElements} Results</div>
      </div>
    </div>
  );
};

export default PaginationBar;
