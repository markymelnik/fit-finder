import SomethingLink from './SomethingLink';
import GitHubIcon from '../../../../assets/icons/footer/github-icon.png';
import LinkedInIcon from '../../../../assets/icons/footer/linkedin-icon.png';

import './_footer-links.scss';

const FooterLinks = () => {
  return (
    <div className='footer-links'>
      <SomethingLink url='https://github.com' icon={GitHubIcon} alt="GitHub Icon" />
      <SomethingLink url='https://linkedin.com' icon={LinkedInIcon} alt="LinkedIn Icon" />
    </div>
  );
};

export default FooterLinks;
