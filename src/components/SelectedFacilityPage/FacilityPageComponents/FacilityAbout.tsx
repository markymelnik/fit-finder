import FacilityDescription from './FacilityDescription';
import FacilityOfferings from './FacilityOfferings/FacilityOfferings';

const FacilityAbout = () => {

  return (
      <div className='facility-about'>
        <div className="facility-about-header">
          About
        </div>
        <div className="facility-data">
          <div className="facility-data-left">
            <FacilityDescription />
          </div>
          <div className="facility-data-right">
            <FacilityOfferings />
          </div>  
        </div>
      </div>
  )
}

export default FacilityAbout;