import AboutDescription from './AboutDescription/AboutDescription';
import AboutPhoto from './AboutPhoto/AboutPhoto';
import './_about-section.scss';

const AboutSection = () => {

  return (
    <section className="about-section-container">
      <div className="about-section-top">
        <h2 className="about-section-title">Looking for a workout spot?</h2>
        <h3 className="about-section-subtitle">Find it with <span>fitfinder</span>.</h3>
      </div>
      <div className="about-section-bottom">
        <AboutDescription />
        <AboutPhoto />
      </div>
    </section>
  )
}

export default AboutSection;