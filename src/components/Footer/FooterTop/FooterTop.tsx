import DevInfo from "./DevInfo/DevInfo";
import FooterLinks from "./FooterLinks/FooterLinks";
import "./_footer-top.scss";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <DevInfo />
      <FooterLinks />
    </div>
  );
};

export default FooterTop;
