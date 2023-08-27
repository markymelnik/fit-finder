import SearchBar from "../../../SearchBar";
import './_search-page-searchbar.scss';

const SearchPageSearchBar = () => {
  return (
    <SearchBar
      containerClass="search-page-searchbar"
      submitButtonClass="submit-input-btn-search"
      deleteButtonClass="delete-input-btn-search"
      placeholderText="Name, Address, Neighborhood, ZIP"
    />
  )
}

export default SearchPageSearchBar;
