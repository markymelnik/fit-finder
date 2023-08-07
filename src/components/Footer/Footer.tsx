import DeveloperInformation from './DeveloperInformation';
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <DeveloperInformation />
      <SocialMediaLinks />
    </footer>
  );
};

export default Footer;
