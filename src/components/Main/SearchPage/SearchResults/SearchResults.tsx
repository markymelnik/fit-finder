import { useSelector } from 'react-redux';

import DesktopResultsContainer from './DesktopResults/DesktopResultsContainer';
import MobileResultsContainer from './MobileResults/MobileResultsContainer';
import { RootState } from '../../../../redux/store';
import './_search-results.scss';

const SearchResults = () => {

  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);

  return (
    <div className="search-results-container">
      {isMobile ? < MobileResultsContainer/> : <DesktopResultsContainer />}
    </div>
  )   
};

export default SearchResults;
