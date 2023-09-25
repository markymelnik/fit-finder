import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../../redux/store";
import { setIsSidebarMenuOpen } from "../../../../redux/slices/sidebarMenuSlice";

type AboutLinkProps = {
  customClass: string;
}
const AboutLink = ({ customClass }: AboutLinkProps) => {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

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
    dispatch(setIsSidebarMenuOpen(false));
  };

  return (
    <div className={customClass} onClick={handleAboutButtonClick}>
      <div className={`${customClass}-text`}>About</div>
    </div>
  )
}

export default AboutLink;