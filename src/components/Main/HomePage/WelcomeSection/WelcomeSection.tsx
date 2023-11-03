import HPSearchbar from "./HPSearchbar/HPSearchbar";
import WelcomePhoto from "./WelcomePhoto/WelcomePhoto";
import WelcomeText from "./WelcomeText/WelcomeText";
import './_welcome-section.scss';

const WelcomeSection = () => {
  return (
    <section className="welcome-section-container">
      <WelcomePhoto />
      <WelcomeText />
      <HPSearchbar />
    </section>
  )
}

export default WelcomeSection;