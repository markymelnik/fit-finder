import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import FavoriteSVG from './FavoriteSVG';
import { addFavoritedFacility, deleteFavoritedFacility } from '../../../../../redux/apiRequests';
import { favoritedFacilityIdSelector } from '../../../../../redux/selectors/favoriteFacilityIdSelector';
import { deleteFavoritedFacilityFromState, selectFavoriteCap, selectFavoriteCount } from '../../../../../redux/slices/favoritedFacilitySlice';
import { AppDispatch, RootState } from '../../../../../redux/store';
import './_add-favorite-btn.scss';

type AddFavoriteButtonProps = {
  userAccountId: string,
  facilityId: number,
  customClass: string,
}

const AddFavoriteButton = ({ userAccountId, facilityId, customClass}: AddFavoriteButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [limitReached, setLimitReached] = useState<boolean>(false);

  const favoriteCount = useSelector(selectFavoriteCount);
  const favoriteCap = useSelector(selectFavoriteCap);

  const favoritedFacilityIds = useSelector(favoritedFacilityIdSelector);
  const isFavorited = favoritedFacilityIds.includes(facilityId);

  const favoritedFacilityObjects = useSelector(
    (state: RootState) => state.favoritedFacility.favoritedFacilities
  );

  let bottomPosition = "1rem";
  if (customClass === "save-section-add-favorite-btn") {
    bottomPosition = "5.25rem";
  } else if (customClass === "facility-card-add-favorite-btn") {
    bottomPosition = "10.5rem";
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (limitReached) {
      timeout = setTimeout(() => {
        setLimitReached(false);
      }, 3000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [limitReached]);

  const handleAddFavoriteClick = async (event: any) => {
    event.stopPropagation();

    if (favoriteCount === favoriteCap && !isFavorited) {
      setLimitReached(true);
    }

    let passedFacilityObjId: number = 0;
    for (const facilityObject of favoritedFacilityObjects) {
      if (facilityObject.facility.id === facilityId) {
        passedFacilityObjId = facilityObject.id;
        break;
      }
    }

    if (isFavorited) {
      try {
        await dispatch(deleteFavoritedFacility(passedFacilityObjId));
        dispatch(deleteFavoritedFacilityFromState(passedFacilityObjId));
      } catch (err) {
        console.error("Error deleting favorited facility");
      }
    } else {
      try {
        dispatch(addFavoritedFacility(addFavoriteData));
      } catch (err) {
        console.error("Error adding favorited facility");
      }
    }
  };

  const addFavoriteData = {
    userAccountId: userAccountId,
    facilityId: facilityId,
  };

  return (
    <div className="favorite-box">
      <div className={`limit-message ${limitReached ? `limit-reached` : ``}`} style={{ bottom: bottomPosition }}>
        <div className="message-text">Your favorites list is full!</div>
      </div>
      <button className={customClass} onClick={handleAddFavoriteClick}>
        <FavoriteSVG isFilled={isFavorited} />
      </button>
    </div>
  );
}

export default AddFavoriteButton;
