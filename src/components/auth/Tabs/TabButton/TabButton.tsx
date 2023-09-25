import './_tab-btn.scss';

interface TabButtonProps {
  buttonText: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ buttonText, isActive, onClick }: TabButtonProps) => {
  return (
    <div className={`tab-btn ${isActive ? 'active' : ''}`} onClick={onClick}>{buttonText}</div>
  )
}

export default TabButton;

