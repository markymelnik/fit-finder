import { ReactNode } from "react";

type SocialLink = {
  url: string;
  svg: ReactNode;
};

const SocialLink = ({ url, svg }: SocialLink) => {
  return (
    <div className="social-link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {svg}
      </a>
    </div>
  );
};

export default SocialLink;
