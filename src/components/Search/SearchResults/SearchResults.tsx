import Card from '../../Location/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const ResultsList = () => {
  const locations = useSelector((state: RootState) => state.locations.locations);

  if (locations.length === 0) {
    return <p>No results found for your query.</p>
  }
  
  return (
    <div className='results-list'>
      {locations.map((location) => (
        <Card
          key={location.id}
          name={location.name}
          type={location.type}
          address={location.address}
        />
      ))}
    </div>
  );
};

export default ResultsList;
