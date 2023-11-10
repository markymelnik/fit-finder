import UpRightArrowSVG from "../../../../assets/svg/arrows/UpRightArrowSVG";
import "./_dev-info.scss";

const DevInfo = () => {
  return (
    <div className="dev-info">
      <span className="dev-name">Developed by Mark Melnik</span>
      <a
        className="dev-site"
        href="https://markmelnik.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>markmelnik.com</span>
      
          <UpRightArrowSVG />
     
      </a>
    </div>
  );
};

export default DevInfo;
