import SearchResults from "../ResultsList/ResultsList";
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
