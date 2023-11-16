import { ReactNode } from "react";

type SocialLink = {
  url: string;
  label: string;
  svg: ReactNode;
};

const SocialLink = ({ url, label, svg }: SocialLink) => {
  return (
    <div className="social-link">
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {svg}
      </a>
    </div>
  );
};

export default SocialLink;
