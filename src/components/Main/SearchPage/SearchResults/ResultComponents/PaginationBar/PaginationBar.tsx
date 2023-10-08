import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import getDisplayedNumbers from "./getDisplayedNumbers";
import { setCurrentPage } from "../../../../../../redux/slices/paginationSlice";
import { RootState } from "../../../../../../redux/store";
import "./_pagination-bar.scss";

const PaginationBar = () => {
  
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state: RootState) => state.pagination);
  const displayedNumbers = getDisplayedNumbers(currentPage, totalPages);

  const handleToStartButtonClick = () => {
    dispatch(setCurrentPage(1));
  };

  const handlePrevButtonClick = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextButtonClick = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handleToEndButtonClick = () => {
    dispatch(setCurrentPage(totalPages));
  };

  return (
    <div className="pagination-bar-container">
      <div className="pagination-bar">
        <div
          className={`to-start-btn ${currentPage === 1 ? `disabled` : ``}`}
          onClick={handleToStartButtonClick}
        ></div>
        <div
          className={`prev-btn ${currentPage === 1 ? `disabled` : ``}`}
          onClick={currentPage === 1 ? undefined : handlePrevButtonClick}
        >
          Prev
        </div>
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
        <div
          className={`next-btn ${currentPage === totalPages ? `disabled` : ``}`}
          onClick={
            currentPage === totalPages ? undefined : handleNextButtonClick
          }
        >
          Next
        </div>
        <div
          className={`to-end-btn ${
            currentPage === totalPages ? `disabled` : ``
          }`}
          onClick={handleToEndButtonClick}
        ></div>
      </div>
    </div>
  );
};

export default PaginationBar;
