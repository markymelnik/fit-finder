import PaginationBar from "../ResultComponents/PaginationBar/PaginationBar";
import QuerySection from "../ResultComponents/QuerySection/QuerySection";
import ResultCards from "../ResultComponents/ResultCards/ResultCards";

const MobileResultsWithoutMap = () => {

  return (
    <div className="without-map">
      <QuerySection />
      <ResultCards />
      <PaginationBar />
    </div>
  )
}

export default MobileResultsWithoutMap;
