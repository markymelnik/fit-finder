import DesktopProfileDropdown from "../DesktopProfileDropdown/DesktopProfileDropdown";
import AboutLink from "./AboutLink";
import './_navigation-bar.scss';

const NavigationBar = () => {

  return (
    <div className='navigation-bar'>
      <div className='navigation-links'>
        <AboutLink customClass='about-link' />
        <DesktopProfileDropdown/>
      </div>
    </div>
  );
};

export default NavigationBar;
