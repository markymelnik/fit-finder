
import CopyrightMessage from "./CopyrightMessage/CopyrightMessage";
import FooterLogo from "./FooterLogo/FooterLogo";
import "./_footer-bottom.scss";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <FooterLogo />
      <CopyrightMessage />
    </div>
  );
};

export default FooterBottom;
