import ResetFiltersButton from '../../../../../../common/button/search/ResetFiltersButton';
import './_no-results.scss';

const NoResults = () => {
  return (
    <div className="no-results-container">
        <div className="no-results-message">
          <p>No results found.</p>
          <p>Adjust your search filters to see new locations!</p>
        </div>
        <ResetFiltersButton customClass='no-results-reset-filters-btn' buttonText='Reset Filters' />
      </div>
  )
}

export default NoResults;