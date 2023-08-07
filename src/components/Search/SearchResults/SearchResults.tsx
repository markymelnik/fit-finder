import Card from '../../Facility/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { AppDispatch } from '../../../redux/store';
import { setSelectedFacility } from '../../../redux/selectedFacilitySlice';

interface Facility {
  name: String;
  type: String;
  address: String;
}

const ResultsList = () => {
  const facilities = useSelector((state: RootState) => state.facilities.facilities);
  const dispatch = useDispatch<AppDispatch>();

  if (facilities.length === 0) {
    return <p>No results found for your query.</p>
  }

  const handleCardClick = ({ name, type, address }: Facility) => {
    const locationData = ({ name, type, address });
    dispatch(setSelectedFacility(locationData));
  }
  
  return (
    <div className='results-list'>
      {facilities.map((facility) => (
        <Card
          key={facility.id}
          name={facility.name}
          type={facility.type}
          address={facility.address}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default ResultsList;
