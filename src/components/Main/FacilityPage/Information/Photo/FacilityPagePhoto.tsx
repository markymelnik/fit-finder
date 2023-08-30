import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import usePhotoLoader from '../../../../../hooks/usePhotoLoader';
import './_facility-page-photo.scss';

const FacilityPagePhoto = () => {

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  if (!selectedFacility) {
    return <p className="no-facility-photo-found">Facility Photo not found.</p>
  }

  const photo = usePhotoLoader(selectedFacility.id);

  return (
    <div className='facility-page-photo-container'>
      {photo && <img src={photo} />}
    </div>
  );
};

export default FacilityPagePhoto;
