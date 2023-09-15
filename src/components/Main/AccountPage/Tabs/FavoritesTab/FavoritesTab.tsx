import { useSelector } from 'react-redux';
import DeleteFavoriteButton from './DeleteFavoriteButton/DeleteFavoriteButton';
import './_favorites-tab.scss';
import { AppDispatch, RootState } from '../../../../../redux/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavoritedFacilities } from '../../../../../redux/apiRequests';

const FavoritesTab = () => {

  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
  const userAccountId = useSelector((state: RootState) => state.authentication.userAccount?.id);
  const favoritedFacility = useSelector((state: RootState) => state.favoritedFacility);

  useEffect(() => {
    if (userAccountId) {
      dispatch(fetchFavoritedFacilities(userAccountId));
    }
  }, [userAccountId, dispatch]);
  
  console.log(favoritedFacility);

  return (
    <div className='account-favorites-container'>
      <div className='account-favorites-header'>My Favorites</div>
      {isLoggedIn && userAccountId ? (
        <div className='favorited-facility-container'>
          {favoritedFacility.map((favoriteFacilityObject) => {
            return (
              <div className='favorited-facility-card' key={favoriteFacilityObject.facility.id}>
                <div className="favorited-facility-card-text">
                  <h1>{favoriteFacilityObject.facility.id}</h1>
                  <h1>{favoriteFacilityObject.facility.name}</h1>
                </div>
                <DeleteFavoriteButton 
                  favoriteFacilityObjectId={favoriteFacilityObject.id}
                />
              </div>
            )
          })}
        </div>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default FavoritesTab;