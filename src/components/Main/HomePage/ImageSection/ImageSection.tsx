import './_image-section.scss';
import WorkoutBackground from '../../../../assets/photos/home/workout-background.jpg';

const ImageSection = () => {

  return (
    <div className="image-section-container">
        <img src={WorkoutBackground} alt="home page workout photo above footer" />
    </div>
  )
}

export default ImageSection;