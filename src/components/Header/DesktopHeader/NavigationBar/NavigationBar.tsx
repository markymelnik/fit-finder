import AccountMenu from "../AccountMenu/AccountMenu";
import AboutLink from "./AboutLink";
import './_navigation-bar.scss';

const NavigationBar = () => {

  return (
    <div className='navigation-bar'>
      <div className='navigation-links'>
        <AboutLink customClass='about-link' />
        <AccountMenu/>
      </div>
    </div>
  );
};

export default NavigationBar;
