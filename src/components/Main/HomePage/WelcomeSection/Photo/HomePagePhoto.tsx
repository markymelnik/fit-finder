import './_home-page-photo.scss';
import HomeBackgroundPhoto from '../../../../../assets/photos/home/home-background.jpg';

const HomePagePhoto = () => {
  return (
    <div className='home-page-photo-container'>
      <img src={HomeBackgroundPhoto} alt='home page background photo'/>
    </div>
  );
};

export default HomePagePhoto;
