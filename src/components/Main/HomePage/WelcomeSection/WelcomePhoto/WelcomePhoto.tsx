import HomeWelcomeBackground from '../../../../../assets/photos/home/home-welcome-background.jpg';
import './_welcome-photo.scss';

const WelcomePhoto = () => {
  return (
    <div className='home-page-welcome-photo'>
      <img src={HomeWelcomeBackground} alt='home page welcome photo'/>
    </div>
  );
};

export default WelcomePhoto;
