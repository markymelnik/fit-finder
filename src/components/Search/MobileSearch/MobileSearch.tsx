import SearchSubheader from "../SearchSubheader/SearchSubheader";
import QueryInformation from "../QueryInformation";
import Results from "../Results/Results";

const MobileSearch = ({ useIsMobile }) => {
  return (
    <div className='search-mobile-container'>
      <SearchSubheader useIsMobile={useIsMobile} />
      <QueryInformation />
      <Results />
    </div>
  )
};

export default MobileSearch;
