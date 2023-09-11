import BusinessLink from './BusinessLink';
import AboutLink from './AboutLink';
import HelpLink from './HelpLink';
import LogInLink from './LogInLink';
import AccountLink from './AccountLink';
/* import SignUpLink from './SignUpLink'; */
import './_navigation-links.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const NavigationLinks = () => {

  const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);

  return (
    <div className='navigation-links'>
      <BusinessLink />
      <AboutLink />
      {/* <HelpLink /> */}
      {isLoggedIn ? <AccountLink /> : <LogInLink />}
      {/* <SignUpLink /> */}
    </div>
  );
};

export default NavigationLinks;
