import FooterLinks from './FooterLinks/FooterLinks';
import './_footer-bottom.scss';

const FooterBottom = () => {
  return (
    <div className='footer-bottom'>
      <h5 className='dev-info'>Developed by Mark Melnik</h5>
      <FooterLinks />
    </div>
  );
};

export default FooterBottom;
