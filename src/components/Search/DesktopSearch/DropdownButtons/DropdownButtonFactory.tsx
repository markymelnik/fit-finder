interface DropdownButtonFactoryProps {
  text: string;
  customClass?: string;
}

const DropdownButtonFactory = ({ text, customClass }: DropdownButtonFactoryProps) => {
  return <button className={customClass}>{text}</button>;
};

export default DropdownButtonFactory;
