import SearchBar from "../../SearchBar";

const HomePageSearchBar = () => {
  return (
    <SearchBar
      containerClass="home-page-searchbar"
      submitButtonClass="submit-input-btn-home"
      deleteButtonClass="delete-input-btn-home"
      placeholderText="Enter a name, address, neighborhood, or ZIP code..."
    />
  )
}

export default HomePageSearchBar;
