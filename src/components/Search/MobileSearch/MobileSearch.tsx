import SearchSubheader from '../SearchSubheader/SearchSubheader';
import QueryInformation from '../QueryInformation';
import Results from '../SearchResults/ResultsContainer';

const MobileSearch = () => {
  return (
    <div className='search-mobile-container'>
      <SearchSubheader />
      <QueryInformation />
      <Results />
    </div>
  );
};

export default MobileSearch;
