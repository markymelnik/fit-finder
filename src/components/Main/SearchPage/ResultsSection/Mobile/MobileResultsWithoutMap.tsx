import QueryResultInfo from "../QuerySection/QueryResultInfo";
import SearchResults from "../ResultsList/ResultsList";

const MobileResultsWithoutMap = () => {

  return (
    <div className="without-map">
      <QueryResultInfo />
      <SearchResults />
    </div>
  )
}

export default MobileResultsWithoutMap;
