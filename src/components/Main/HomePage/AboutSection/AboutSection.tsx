import { Link } from 'react-router-dom';
import ToSearchButton from './ToSearchButton/ToSearchButton';
import SearchScreenshot from '../../../../assets/photos/home/search-screenshot.png';
import './_about-section.scss';

const AboutSection = () => {

  return (
    <div className="about-section-container">
      <div className="about-section-top">
        <div className="about-section-title">Looking for a place to workout?</div>
        <div className="about-section-subtitle">Find it with fitfinder.</div>
      </div>
      <div className="about-section-row">
        <div className="row-left">
          <div className="row-text">
            <div className="row-title">Easy to use</div>       
            <p className="row-description">
              Find your perfect gym or fitness center using our intuitive site.
              Search by keywords including location name, address, neighborhood, and ZIP code.
              Filter your search by type, amenities, and services to find exactly what you're looking for.
              Explore locations on our interactive street map tool!
            </p>
            <ToSearchButton />
          </div>
        </div>
        <div className="row-right">
          <Link to='/search' className="row-photo-container">
            <img src={SearchScreenshot} />
          </Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default AboutSection;