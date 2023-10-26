import AboutLink from "./AboutLink";
import AccountMenu from "../AccountMenu/AccountMenu";
import './_navigation-bar.scss';

const NavigationBar = () => {

  return (
    <div className='navigation-bar'>
      <div className='navigation-links'>
        <AboutLink customClass='about-link' innerText={'About'} />
        <AccountMenu/>
      </div>
    </div>
  );
};

export default NavigationBar;
