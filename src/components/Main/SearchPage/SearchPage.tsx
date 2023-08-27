import SearchPageSubheader from "./Subheader/SearchPageSubheader";
import ResultsContainer from "./Results/ResultsContainer";
import MobileMapSwitchButton from "./MobileMapSwitchButton/MobileMapSwitchButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import './_search-container.scss';

const SearchPage = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return (
    <div className='search-container'>
      <SearchPageSubheader />
      <ResultsContainer />
      {isMobile && <MobileMapSwitchButton />}
    </div>
  );
};

export default SearchPage;
