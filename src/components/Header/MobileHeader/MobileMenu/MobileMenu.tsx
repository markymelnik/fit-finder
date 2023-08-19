import SignUpLink from "../../DesktopHeader/NavigationBar/NavigationLinks/SignUpLink";
import AboutLink from "../../DesktopHeader/NavigationBar/NavigationLinks/AboutLink";
import BusinessLink from "../../DesktopHeader/NavigationBar/NavigationLinks/BusinessLink";
import HelpLink from "../../DesktopHeader/NavigationBar/NavigationLinks/HelpLink";

const MobileMenu = () => {

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-links">
        <BusinessLink />
        <AboutLink />
        <HelpLink />
        <SignUpLink />
      </div>
    </div>
  )
}

export default MobileMenu;