import MapOverlay from "./MapOverlay";
import SearchResults from "./SearchResults"

const SearchResultsWithMap = () => {

  return (
    <div className='with-map'>
      <SearchResults />
      <MapOverlay />
    </div>
  )
}

export default SearchResultsWithMap;