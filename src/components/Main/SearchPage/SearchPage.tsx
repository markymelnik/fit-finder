import SearchSubheader from "./Subheader/SearchSubheader";
import ResultsDisplay from "./ResultsSection/ResultsDisplay";
import MobileMapSwitchButton from "./MobileMapSwitchButton/MobileMapSwitchButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import './_search-page.scss';

const SearchPage = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return (
    <div className='search-page-container'>
      <SearchSubheader />
      <ResultsDisplay />
      {isMobile && <MobileMapSwitchButton />}
    </div>
  );
};

export default SearchPage;
