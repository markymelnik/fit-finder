import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import MobileResultsContainer from './MobileResults/MobileResultsContainer';
import DesktopResultsContainer from './DesktopResults/DesktopResultsContainer';
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
