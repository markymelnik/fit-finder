import { useNavigate } from "react-router-dom";

const AboutLink = () => {

  const navigate = useNavigate();

  const scrollToAboutSection = () => {
    const aboutSection = document.querySelector(".about-section-container");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleAboutButtonClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToAboutSection();
      }, 200);
    } else {
      scrollToAboutSection();
    }
  };

  return (
    <div className="about-link" onClick={handleAboutButtonClick}>About</div>
  )
}

export default AboutLink;