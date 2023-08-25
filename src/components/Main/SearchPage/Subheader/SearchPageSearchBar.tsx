import SearchBar from "../../SearchBar";

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
