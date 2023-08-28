import './_results-list.scss';

const EmptyResultsList = () => {
  return (
    <div className="results-list-container">
      <div className="empty-results-list">
        <p>No results found for your query.</p>
      </div>
    </div>
  )
}

export default EmptyResultsList;
