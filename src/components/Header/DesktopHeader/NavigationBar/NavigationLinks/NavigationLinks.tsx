import BusinessLink from './BusinessLink';
import HelpLink from './HelpLink';
import LogInSignUpLink from './LogInSignUpLink';

const NavigationLinks = () => {
  return (
    <div className='navigation-links'>
      <BusinessLink />
      <HelpLink />
      <LogInSignUpLink />
    </div>
  );
};

export default NavigationLinks;
