import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import FavoritedFacilityCard from "./FavoriteCard/FavoriteCard";
import NoFavoritesMessage from "./NoFavoritesMessage/NoFavoritesMessage";
import { fetchFavoritedFacilities } from "../../../../../redux/apiRequests";
import { selectFavoriteCap, selectFavoriteCount } from "../../../../../redux/slices/favoritedFacilitySlice";
import { setSelectedFacility } from "../../../../../redux/slices/selectedFacilitySlice";
import { AppDispatch, RootState } from "../../../../../redux/store";
import "./_favorites-tab.scss";

const FavoritesTab = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const userAccountId = useSelector((state: RootState) => state.login.userAccount?.id);
  const favoritedFacility = useSelector((state: RootState) => state.favoritedFacility);
  const favoriteCap = useSelector(selectFavoriteCap);
  const favoriteCount = useSelector(selectFavoriteCount);

  useEffect(() => {
    if (userAccountId) {
      dispatch(fetchFavoritedFacilities(userAccountId));
    }
  }, [userAccountId, dispatch]);

  const handleCardClick = (facility: any) => {
    dispatch(setSelectedFacility(facility));
  };

  return (
    <div className="account-favorites-container">
      <div className="account-favorites-top">
        <div className="account-favorites-header">My Favorites</div>
        <div className={`account-favorites-count`}>
          <div className="favorite-count">{favoriteCount}</div>
          <span className="favorite-slash">/</span>
          <div className="favorite-cap">{favoriteCap}</div>
        </div>
      </div>
      {isLoggedIn && userAccountId ? (
      <div className="account-favorites-bottom">
        <div className="favorited-facility-container">
          {favoritedFacility.favoritedFacilities.length === 0 ? (
            <NoFavoritesMessage />
          ) : (
            favoritedFacility.favoritedFacilities.map(
              (favoriteFacilityObject) => {
                return (
                  <FavoritedFacilityCard
                    favoriteFacilityObject={favoriteFacilityObject}
                    onClick={() =>
                      handleCardClick(favoriteFacilityObject.facility)
                    }
                    key={favoriteFacilityObject.facility.id}
                  />
                );
              }
            )
          )}
        </div>
      </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FavoritesTab;
