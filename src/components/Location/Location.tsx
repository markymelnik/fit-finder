import LocationDisplay from './LocationPhoto';
import LocationInformation from './LocationInformation';
import LocationNavigation from './LocationNavigation';

const Location = () => {
  return (
    <div className='location-container'>
      <LocationDisplay />
      <LocationInformation />
      <LocationNavigation />
    </div>
  );
};

export default Location;
