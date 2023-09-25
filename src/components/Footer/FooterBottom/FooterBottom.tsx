import DevInfo from './DevInfo/DevInfo';
import FooterLinks from './FooterLinks/FooterLinks';
import './_footer-bottom.scss';

const FooterBottom = () => {
  return (
    <div className='footer-bottom'>
      <DevInfo />
      <FooterLinks />
    </div>
  );
};

export default FooterBottom;
