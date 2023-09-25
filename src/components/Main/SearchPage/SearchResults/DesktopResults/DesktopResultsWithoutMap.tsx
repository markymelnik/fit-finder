import ResultCards from "../ResultComponents/ResultCards/ResultCards";
import QuerySection from "../ResultComponents/QuerySection/QuerySection";

const DesktopResultsWithoutMap = () => {

  return (
    <div className="without-map">
      <QuerySection />
      <ResultCards />
    </div>
  )
}

export default DesktopResultsWithoutMap;
