import Subheader from "./Subheader/Subheader";
import SearchResults from "./SearchResults/SearchResults";
import MobileMapSwitchButton from "./MobileMapSwitchButton/MobileMapSwitchButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import './_search-page.scss';

const SearchPage = () => {

  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);

  return (
    <main className='search-page-container'>
      <Subheader />
      <SearchResults />
      {isMobile && <MobileMapSwitchButton />}
    </main>
  );
};

export default SearchPage;
