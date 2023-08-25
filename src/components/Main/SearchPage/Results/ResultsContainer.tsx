import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import MobileResultsContainer from './Mobile/MobileResultsContainer';
import DesktopResultsContainer from './Desktop/DesktopResultsContainer';

const SearchPageResultsContainer = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return (
    <div className="results-container">
      {isMobile ? < MobileResultsContainer/> : <DesktopResultsContainer />}
    </div>

  ) 
  
};

export default SearchPageResultsContainer;
