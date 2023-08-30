import ResultsList from "../ResultsList/ResultsList";
import QuerySection from "../QuerySection/QuerySection";

const DesktopResultsWithoutMap = () => {

  return (
    <div className="without-map">
      <QuerySection />
      <ResultsList />
    </div>
  )
}

export default DesktopResultsWithoutMap;
