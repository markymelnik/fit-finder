import SearchBarComponent from "../../../../common/searchbar/SearchBarComponent";
import './_search-page-searchbar.scss';

const SPSearchbar = () => {
  return (
    <SearchBarComponent
      containerClass="search-page-searchbar"
      submitButtonClass="submit-input-btn-search"
      deleteButtonClass="delete-input-btn-search"
      placeholderText="Name, Address, Neighborhood, ZIP"
    />
  )
}

export default SPSearchbar;
