import MediaLink from "./MediaLink";
import GitHubIcon from "../../../../assets/icons/footer/github-icon.png";
import LinkedInIcon from "../../../../assets/icons/footer/linkedin-icon.png";
import "./_footer-links.scss";

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <MediaLink
        url="https://github.com/markymelnik"
        icon={GitHubIcon}
        alt="GitHub Icon"
      />
      <MediaLink
        url="https://www.linkedin.com/in/markmelnik/"
        icon={LinkedInIcon}
        alt="LinkedIn Icon"
      />
    </div>
  );
};

export default FooterLinks;
