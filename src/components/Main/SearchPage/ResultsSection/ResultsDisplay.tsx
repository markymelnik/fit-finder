import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import MobileResultsContainer from './Mobile/MobileResultsContainer';
import DesktopResultsContainer from './Desktop/DesktopResultsContainer';
import './_results-display.scss';

const ResultsDisplay = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return (
    <div className="results-display-container">
      {isMobile ? < MobileResultsContainer/> : <DesktopResultsContainer />}
    </div>
  )   
};

export default ResultsDisplay;
