import SearchPageHeader from '../SearchPageHeader';
import QueryInformation from '../../SearchResults/QueryResultInfo';
import Results from '../../SearchResults/ResultsContainer';

const MobileSearchPage = () => {
  return (
    <div className='search-container'>
      <SearchPageHeader />
      <QueryInformation />
      <Results />
    </div>
  );
};

export default MobileSearchPage;
