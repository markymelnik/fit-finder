import './_image-section.scss';
import HomeWorkoutBackground from '../../../../assets/photos/home/home-workout-background.jpg';

const ImageSection = () => {

  return (
    <div className="image-section-container">
        <img src={HomeWorkoutBackground} alt="home page workout photo above footer" />
    </div>
  )
}

export default ImageSection;