import './_home-page-photo.scss';
import HomeWelcomeBackground from '../../../../../assets/photos/home/home-welcome-background.jpg';

const HomePagePhoto = () => {
  return (
    <div className='home-page-photo-container'>
      <img src={HomeWelcomeBackground} alt='home page background photo'/>
    </div>
  );
};

export default HomePagePhoto;
