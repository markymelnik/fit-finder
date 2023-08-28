import './_results-list.scss';
/* import DummyCard from '../../../Card/DummyCard'; */

const EmptyResultsList = () => {
  return (
    <div className="results-list-container">
      <div className="empty-results-list">
        <p>No results found for your query.</p>
        {/* <DummyCard /> */}
      </div>
    </div>
  )
}

export default EmptyResultsList;
