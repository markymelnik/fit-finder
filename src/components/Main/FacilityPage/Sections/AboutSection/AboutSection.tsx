import FacilityOfferings from './Offerings/FacilityOfferings';
import './_about-section.scss';

const FacilityAbout = () => {

  return (
      <div className='facility-about-section-container'>
        <div className="facility-about-header">
          About
        </div>
        <div className="facility-data">
          <div className="facility-data-left">
            <div className='facility-description-container'>
              <div className='facility-description-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo ut
                alias unde quidem aliquam saepe ea soluta cum vel veniam, expedita nulla
                incidunt beatae reprehenderit optio quisquam maiores nemo odio accusamus
                consectetur corporis! Dolores libero iste deleniti atque animi!
              </div>
            </div>
          </div>
          <div className="facility-data-right">
            <FacilityOfferings />
          </div>  
        </div>
      </div>
  )
}

export default FacilityAbout;