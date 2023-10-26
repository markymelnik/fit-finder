import SocialLink from "./SocialLink";
import GithubSVG from "../../../../assets/svg/footer/GithubSVG";
import LinkedInSVG from "../../../../assets/svg/footer/LinkedInSVG";
import "./_footer-links.scss";

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <SocialLink
        url="https://github.com/markymelnik"
        svg={<GithubSVG />}
      />
      <SocialLink
        url="https://www.linkedin.com/in/markmelnik/"
        svg={<LinkedInSVG />}
      />
    </div>
  );
};

export default FooterLinks;
