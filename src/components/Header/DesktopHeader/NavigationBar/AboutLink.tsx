import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setIsSidebarMenuOpen } from "../../../../redux/slices/sidebarMenuSlice";
import { AppDispatch } from "../../../../redux/store";

type AboutLinkProps = {
  customClass: string;
  innerText: string;
}

const AboutLink = ({ customClass, innerText }: AboutLinkProps) => {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const scrollToAboutSection = () => {
    const aboutSection = document.querySelector(".about-section-container");
    if (aboutSection) {
      const offset = 60;
      const aboutSectionLocation = aboutSection.getBoundingClientRect().top + window.scrollY;
      const position = aboutSectionLocation - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
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
    <div className={customClass} onClick={handleAboutButtonClick}>{innerText}</div>
  )
}

export default AboutLink;