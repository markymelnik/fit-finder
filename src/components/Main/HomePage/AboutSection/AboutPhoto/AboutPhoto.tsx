import { Link } from 'react-router-dom';

import SearchScreenshot from '../../../../../assets/photos/home/search-screenshot.png';
import './_about-photo.scss';

const AboutPhoto = () => {
  return (
    <div className="about-photo-container">
    <Link to='/search' className="about-search-photo">
      <img src={SearchScreenshot} alt="screenshot of search page"/>
    </Link>
  </div> 
  )
}

export default AboutPhoto;