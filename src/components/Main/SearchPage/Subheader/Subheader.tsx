import { useSelector } from 'react-redux';
import SPSearchbar from './SPSearchbar/SPSearchbar';
import MobileFilterToggleButton from './MobileSubheader/MobileFilterMenuToggleButton/MobileFilterMenuToggleButton';
import DesktopFilterMenu from './DesktopSubheader/DesktopFilterMenu/DesktopFilterMenu';
import { RootState } from '../../../../redux/store';
import DesktopMapSwitchButton from './DesktopSubheader/DesktopMapSwitchButton/DesktopMapSwitchButton';
import './_subheader.scss';

const Subheader = () => {

  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);
  
  return (
    <div className='search-page-subheader-container'>
      <div className="search-options-container">
        <SPSearchbar />
        {isMobile ? <MobileFilterToggleButton /> : <DesktopFilterMenu />}
      </div>
      {!isMobile && <DesktopMapSwitchButton />}
    </div>
  );
};

export default Subheader;
