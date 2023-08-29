import SearchBarComponent from "../../../SearchBarComponent";
import './_search-page-searchbar.scss';

const SearchPageSearchBar = () => {
  return (
    <SearchBarComponent
      containerClass="search-page-searchbar"
      submitButtonClass="submit-input-btn-search"
      deleteButtonClass="delete-input-btn-search"
      placeholderText="Name, Address, Neighborhood, ZIP"
    />
  )
}

export default SearchPageSearchBar;
