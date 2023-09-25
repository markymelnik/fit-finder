import SearchBarComponent from "../../../../common/SearchBarComponent";
import './_search-page-searchbar.scss';

const SearchPageSearchbar = () => {
  return (
    <SearchBarComponent
      containerClass="search-page-searchbar"
      submitButtonClass="submit-input-btn-search"
      deleteButtonClass="delete-input-btn-search"
      placeholderText="Name, Address, Neighborhood, ZIP"
    />
  )
}

export default SearchPageSearchbar;
