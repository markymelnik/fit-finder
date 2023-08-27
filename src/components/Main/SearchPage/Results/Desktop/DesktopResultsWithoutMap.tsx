import SearchResults from "../SearchResults/SearchResults";
import QueryResultInfo from "../QuerySection/QueryResultInfo";

const DesktopResultsWithoutMap = () => {

  return (
    <div className="without-map">
      <QueryResultInfo />
      <SearchResults />
    </div>
  )
}

export default DesktopResultsWithoutMap;
