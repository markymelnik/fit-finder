import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ChevronLeftSVG from "../../../../../../assets/svg/arrows/ChevronLeftSVG";
import { setCurrentPage } from "../../../../../../redux/slices/paginationSlice";
import { RootState } from "../../../../../../redux/store";

type ArrowPrevProps = {
  customClass: string;
}
const ArrowPrev = ({ customClass }: ArrowPrevProps) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: RootState) => state.pagination);

  const handlePrevButtonClick = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div
    className={`${customClass} ${currentPage === 1 ? `disabled` : ``}`}
    onClick={currentPage === 1 ? undefined : handlePrevButtonClick}
  >
    <ChevronLeftSVG />
  </div>
  );
};

export default ArrowPrev;