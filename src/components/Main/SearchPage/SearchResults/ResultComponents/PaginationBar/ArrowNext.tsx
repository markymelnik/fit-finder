import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ChevronRightSVG from "../../../../../../assets/svg/arrows/ChevronRightSVG";
import { setCurrentPage } from "../../../../../../redux/slices/paginationSlice";
import { RootState } from "../../../../../../redux/store";

type ArrowNextProps = { 
  customClass: string;
}

const ArrowNext = ({ customClass }: ArrowNextProps) => {

  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state: RootState) => state.pagination);

  const handleNextButtonClick = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div
      className={`${customClass} ${currentPage === totalPages ? `disabled` : ``}`}
      onClick={currentPage === totalPages ? undefined : handleNextButtonClick}
    >
      <ChevronRightSVG />
    </div>
  );
};

export default ArrowNext;