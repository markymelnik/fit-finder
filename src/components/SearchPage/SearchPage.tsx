import SearchPageHeader from "./SearchPageHeader/SearchPageHeader";
import ResultsContainer from "./SearchPageResults/SearchPageResultsContainer";
import MobileMapSwitchButton from "./SearchPageHeader/Mobile/MobileMapSwitchButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SearchPage = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return (
    <div className='search-container'>
      <SearchPageHeader />
      <ResultsContainer />
      {isMobile && <MobileMapSwitchButton />}
    </div>
  );
};

export default SearchPage;
