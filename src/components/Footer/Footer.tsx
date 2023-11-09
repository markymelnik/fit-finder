import FooterBottom from "./FooterBottom/FooterBottom";
import FooterDivider from "./FooterDivider/FooterDivider";
import FooterTop from "./FooterTop/FooterTop";
import './_footer.scss';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <FooterTop />
      <FooterDivider />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
