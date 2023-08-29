import Searchbar from '../../../SearchBar';
import './_home-page-searchbar.scss';

const HomePageSearchBar =  () => {
  return (
    <Searchbar
      containerClass="home-page-searchbar"
      submitButtonClass="submit-input-btn-home"
      deleteButtonClass="delete-input-btn-home"
      placeholderText="Enter a name, address, neighborhood, or ZIP code..."
    />
  )
}

export default HomePageSearchBar;
