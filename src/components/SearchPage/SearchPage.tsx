import SearchPageHeader from "./SearchPageHeader/SearchPageHeader";
import ResultsContainer from "./SearchPageResults/SearchPageResultsContainer";

const SearchPage = () => {
  return (
    <div className='search-container'>
      <SearchPageHeader />
      <ResultsContainer />
    </div>
  );
};

export default SearchPage;
