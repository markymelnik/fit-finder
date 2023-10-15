import SearchBarComponent from "../../../../common/searchbar/SearchBarComponent";
import './_home-page-searchbar.scss';

const HPSearchbar = () => {
  return (
    <SearchBarComponent
      containerClass='home-page-searchbar'
      submitButtonClass='submit-input-btn-home'
      deleteButtonClass='delete-input-btn-home'
      placeholderText='Enter a name, address, neighborhood, or ZIP code...'
    />
  );
}

export default HPSearchbar;
