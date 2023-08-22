import LogInLink from "../../DesktopHeader/NavigationBar/NavigationLinks/LogInLink";
import AboutLink from "../../DesktopHeader/NavigationBar/NavigationLinks/AboutLink";
import BusinessLink from "../../DesktopHeader/NavigationBar/NavigationLinks/BusinessLink";
import HelpLink from "../../DesktopHeader/NavigationBar/NavigationLinks/HelpLink";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const MobileMenu = () => {

  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);
  
  return (
    <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
      <div className="mobile-menu-header">Fit Finder</div>
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