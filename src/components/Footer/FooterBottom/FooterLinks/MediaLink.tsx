type SomethingLinkProps = {
  url: string;
  icon: string;
  alt: string;
};

const MediaLink = ({ url, icon, alt }: SomethingLinkProps) => {
  return (
    <div className="something-link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={alt} />
      </a>
    </div>
  );
};

export default MediaLink;
