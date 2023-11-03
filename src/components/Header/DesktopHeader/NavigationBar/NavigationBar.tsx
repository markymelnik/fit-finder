import AboutLink from "./AboutLink";
import AccountMenu from "../AccountMenu/AccountMenu";
import './_navigation-bar.scss';

const NavigationBar = () => {

  return (
    <nav className='navigation-bar'>
      <ul className='navigation-links'>
        <li>
          <AboutLink customClass='about-link' innerText={'About'} />
        </li>
        <li>
          <AccountMenu/>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
