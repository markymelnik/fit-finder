import SearchSubheader from '../SearchSubheader/SearchSubheader';
import QueryInformation from '../QueryInformation';
import Results from '../Results/Results';

const DesktopSearch = () => {
  return (
    <div className='search-desktop-container'>
      <SearchSubheader />
      <QueryInformation />
      <Results />
    </div>
  );
};

export default DesktopSearch;
