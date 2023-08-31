import LogInLink from "../../NavigationBar/NavigationLinks/LogInLink";
import AboutLink from "../../NavigationBar/NavigationLinks/AboutLink";
import BusinessLink from "../../NavigationBar/NavigationLinks/BusinessLink";
import HelpLink from "../../NavigationBar/NavigationLinks/HelpLink";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import MobileMenuCloseButton from "../MobileMenuCloseButton/MobileMenuCloseButton";
import './_mobile-menu.scss';


const MobileMenu = () => {

  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);
  
  return (
    <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
      <div className="mobile-menu-header">
        <div className="mobile-menu-logo">fitfinder</div>
        <MobileMenuCloseButton />
      </div>
      <div className="mobile-menu-links">
        <BusinessLink />
        <AboutLink />
        <HelpLink />
        <LogInLink />
      </div>
    </div>
  )
}

export default MobileMenu;