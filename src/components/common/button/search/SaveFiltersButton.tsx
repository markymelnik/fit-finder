import './_filter-btns.scss';

interface SaveFiltersButtonProps {
  customClass: string;
  buttonText: string;
  onClick: () => void;
}

const SaveFiltersButton = ({ customClass, buttonText, onClick }: SaveFiltersButtonProps) => {

  const handleSave = (event: any) => {
    event.preventDefault();
    onClick();
  }
  
  return (
    <button 
      className={customClass}
      onClick={(event) => handleSave(event)}
    >
      {buttonText}
    </button>
  )
}

export default SaveFiltersButton;
