import DesktopProfileDropdown from "../Desktop/DesktopProfileDropdown/DesktopProfileDropdown";
import AboutLink from "./AboutLink";
import './_navigation-bar.scss';

const NavigationBar = () => {

  return (
    <div className='navigation-bar'>
      <div className='navigation-links'>
        <AboutLink />
        <DesktopProfileDropdown/>
      </div>
    </div>
  );
};

export default NavigationBar;
