import HomeWorkoutBackground from '../../../../assets/photos/home/home-workout-background.jpg';
import './_image-section.scss';

const ImageSection = () => {

  return (
    <section className="image-section-container">
        <img src={HomeWorkoutBackground} alt="home page workout photo above footer" />
    </section>
  )
}

export default ImageSection;