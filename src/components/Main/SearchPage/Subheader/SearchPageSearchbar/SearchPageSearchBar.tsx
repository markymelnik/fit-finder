import SearchBar from "../../../Searchbar";
import './_search-page-searchbar.scss';

const SearchPageSearchbar = () => {
  return (
    <SearchBar
      containerClass="search-page-searchbar"
      submitButtonClass="submit-input-btn-search"
      deleteButtonClass="delete-input-btn-search"
      placeholderText="Name, Address, Neighborhood, ZIP"
    />
  )
}

export default SearchPageSearchbar;
