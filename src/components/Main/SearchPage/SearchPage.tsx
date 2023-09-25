import { useSelector } from "react-redux";

import MobileMapSwitchButton from "./MobileMapSwitchButton/MobileMapSwitchButton";
import SearchResults from "./SearchResults/SearchResults";
import Subheader from "./Subheader/Subheader";
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
