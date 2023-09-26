import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import FavoritedFacilityCard from './FavoriteCard/FavoriteCard';
import NoFavoritesMessage from './NoFavoritesMessage/NoFavoritesMessage';
import { fetchFavoritedFacilities } from '../../../../../redux/apiRequests';
import { setSelectedFacility } from '../../../../../redux/slices/selectedFacilitySlice';
import { AppDispatch, RootState } from '../../../../../redux/store';
import './_favorites-tab.scss';

const FavoritesTab = () => {

  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const userAccountId = useSelector((state: RootState) => state.login.userAccount?.id);
  const favoritedFacility = useSelector((state: RootState) => state.favoritedFacility);

  useEffect(() => {
    if (userAccountId) {
      dispatch(fetchFavoritedFacilities(userAccountId));
    }
  }, [userAccountId, dispatch]);

  const handleCardClick = (facility: any) => {
    dispatch(setSelectedFacility(facility));
  }

  return (
    <div className='account-favorites-container'>
      <div className='account-favorites-header'>My Favorites</div>
      {isLoggedIn && userAccountId ? (
        <div className='favorited-facility-container'>
          {favoritedFacility.length === 0
            ? <NoFavoritesMessage />
            : favoritedFacility.map((favoriteFacilityObject) => {
              return (
                <FavoritedFacilityCard
                  favoriteFacilityObject={favoriteFacilityObject}
                  onClick={() => handleCardClick(favoriteFacilityObject.facility)}
                  key={favoriteFacilityObject.facility.id}
                  
                />
              );
            })
          }
        </div>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default FavoritesTab;