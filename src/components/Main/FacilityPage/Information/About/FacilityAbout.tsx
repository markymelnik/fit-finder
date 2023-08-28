import FacilityDescription from './Description/FacilityDescription';
import FacilityOfferings from './Offerings/FacilityOfferings';
import './_facility-about.scss';

const FacilityAbout = () => {

  return (
      <div className='facility-about-container'>
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