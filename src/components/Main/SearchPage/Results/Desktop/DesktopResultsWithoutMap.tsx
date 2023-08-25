import SearchResults from "../SearchResultsComponents/SearchResults";
import QueryResultInfo from "../SearchResultsComponents/QueryResultInfo";

const DesktopResultsWithoutMap = () => {

  return (
    <div className="without-map">
      <QueryResultInfo />
      <SearchResults />
    </div>
  )
}

export default DesktopResultsWithoutMap;
