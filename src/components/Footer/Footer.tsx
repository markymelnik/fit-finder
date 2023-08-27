import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
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
