import './_results-list.scss';
import ResetFiltersButton from '../../FilterButtons/ResetFiltersButton';
/* import DummyCard from '../../../Card/DummyCard'; */

const EmptyResultsList = () => {
  return (
    <div className="results-list-container">
      <div className="empty-results-list">
        <p>No results found.</p>
        <p>Adjust your search filters to see new locations!</p>
        <ResetFiltersButton customClass='empty-reset-filters-btn' buttonText='Reset Filters' />
        {/* <DummyCard /> */}
      </div>
    </div>
  )
}

export default EmptyResultsList;
