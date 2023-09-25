import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import usePhotoLoader from '../../../../../hooks/usePhotoLoader';
import './_photo-section.scss';

const FacilityPagePhoto = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return <p className="no-facility-photo-found">Facility Photo not found.</p>
  }

  const photo = usePhotoLoader(selectedFacility.id);

  return (
    <div className='photo-section-container'>
      {photo && <img src={photo} />}
    </div>
  );
};

export default FacilityPagePhoto;
