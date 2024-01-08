import { Ring } from '@uiball/loaders';

import Header from '../../Header/Header';
import './_fallback-interface.scss';

const FallbackInterface = () => {
  return (
    <div className='fallback-ui'>
      <Header />
      <div className='fallback-center'>
        <div className='fallback-spinner'>
          <Ring size={60} color={`#333333`} lineWeight={3} />
        </div>
        <div className='fallback-text'>Loading...</div>
      </div>
    </div>
  );
};

export default FallbackInterface;
