import LogInLink from "../../NavigationBar/NavigationLinks/LogInLink";
import AboutLink from "../../NavigationBar/NavigationLinks/AboutLink";
import BusinessLink from "../../NavigationBar/NavigationLinks/BusinessLink";
import HelpLink from "../../NavigationBar/NavigationLinks/HelpLink";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import MobileMenuCloseButton from "../MobileMenuCloseButton/MobileMenuCloseButton";
import './_mobile-menu.scss';
import TintedOverlay from "../../../TintedOverlay/TintedOverlay";
import { useDispatch } from "react-redux";
import { setIsMobileMenuOpen } from "../../../../redux/slices/mobileMenuSlice";
import Logo from "../../Logo/Logo";


const MobileMenu = () => {

  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);

  const dispatch = useDispatch<AppDispatch>();

  const closeMobileMenu = () => {
    dispatch(setIsMobileMenuOpen(false));
  }
  
  return (
    <>
      <TintedOverlay isActive={isMobileMenuOpen} onCloseOverlay={closeMobileMenu} />
      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <Logo />
          <MobileMenuCloseButton />
        </div>
        <div className="mobile-menu-links">
          <BusinessLink />
          <AboutLink />
          <HelpLink />
          <LogInLink />
        </div>
      </div>
    </>
  )
}

export default MobileMenu;