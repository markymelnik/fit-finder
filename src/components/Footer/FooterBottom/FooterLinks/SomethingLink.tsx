interface SomethingLinkProps {
  url: string;
  icon: string;
  alt: string;
}

const SomethingLink = ({ url, icon, alt }: SomethingLinkProps) => {
  return (
    <div className='something-link'>
      <a href={url}>
        <img src={icon} alt={alt} />
      </a>
    </div>
  )
};

export default SomethingLink;
