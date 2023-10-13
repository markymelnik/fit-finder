import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";
import './_footer.scss';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
