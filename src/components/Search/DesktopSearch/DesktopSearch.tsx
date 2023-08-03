import SearchSubheader from '../SearchSubheader/SearchSubheader';
import QueryInformation from '../QueryInformation';
import Results from '../Results/Results';

const DesktopSearch = ({ useIsMobile }) => {
  return (
    <div className='search-desktop-container'>
      <SearchSubheader useIsMobile={useIsMobile} />
      <QueryInformation />
      <Results />
    </div>
  );
};

export default DesktopSearch;
