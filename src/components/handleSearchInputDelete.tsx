import { useDispatch } from "react-redux";
import { setEnteredKeyword } from "../redux/slices/filterSlice";
import { AppDispatch } from "../redux/store";

const handleSearchInputDelete = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(setEnteredKeyword(''));
  }

  return handleClick;
}

export default handleSearchInputDelete;