import { Ring } from '@uiball/loaders';
import './_map-fallback.scss';

const MapFallback = () => {
  return (
    <div className='map-fallback-ui'>
      <div className='map-fallback-spinner'>
        <Ring size={60} color={`#333333`} lineWeight={3} />
      </div>
      <div className="map-fallback-text">Getting locations...</div>
    </div>
  );
};

export default MapFallback;
