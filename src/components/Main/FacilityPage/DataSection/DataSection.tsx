import { useSelector } from 'react-redux';

import DataDivider from './DataDivider/DataDivider';
import FacilityAbout from './FacilityAbout/FacilityAbout';
import FacilityInfo from './FacilityInfo/FacilityInfo';
import { RootState } from '../../../../redux/store';
import './_data-section.scss';

const DataSection = () => {

  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);

  return (
    <div className="data-section-container">
      <FacilityInfo />
      {isMobile && <DataDivider />}
      <FacilityAbout />
      <DataDivider />
    </div>
  )
}

export default DataSection;