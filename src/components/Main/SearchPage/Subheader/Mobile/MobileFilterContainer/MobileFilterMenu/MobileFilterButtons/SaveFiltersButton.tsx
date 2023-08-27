import useFacilitySearch from "../../../../../../../../hooks/useFacilitySearch";

interface SaveFiltersButtonProps {
  customClass: string;
  buttonText: string;
  onClick: () => void;
}

const SaveFiltersButton = ({ customClass, buttonText, onClick }: SaveFiltersButtonProps) => {

  const executeSearch = useFacilitySearch();

  const handleSave = (event: any) => {
    event.preventDefault();
    executeSearch();
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
