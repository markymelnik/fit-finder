import DeveloperInformation from './DeveloperInformation';
import FooterLinks from './FooterLinks/FooterLinks';

const FooterBottom = () => {
  return (
    <div className='footer-bottom'>
      <DeveloperInformation />
      <FooterLinks />
    </div>
  );
};

export default FooterBottom;
