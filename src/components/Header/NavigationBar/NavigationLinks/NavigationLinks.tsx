import BusinessLink from './BusinessLink';
import AboutLink from './AboutLink';
import HelpLink from './HelpLink';
import LogInLink from './LogInLink';
/* import SignUpLink from './SignUpLink'; */
import './_navigation-links.scss';

const NavigationLinks = () => {
  return (
    <div className='navigation-links'>
      <BusinessLink />
      <AboutLink />
      <HelpLink />
      <LogInLink />
      {/* <SignUpLink /> */}
    </div>
  );
};

export default NavigationLinks;
