import { Link } from "react-router-dom";

import usePhotoLoader from "../../../../../../hooks/usePhotoLoader";
import DeleteFavoriteButton from "../DeleteFavoriteButton/DeleteFavoriteButton";
import "./_favorite-card.scss";

const FavoriteCard = ({ favoriteFacilityObject, onClick }: any) => {

  const { facility } = favoriteFacilityObject;

  const photo = usePhotoLoader(facility.id);

  const handleClick = () => {
    onClick({ ...facility });
  }

  return (
    <div className="favorite-facility-card" key={facility.id} onClick={handleClick}>
      <Link to="/facility" className="favorite-facility-card-link-wrapper">
        <div className="favorite-facility-card-left">
          {photo && <img src={photo} alt="facility main photo" />}
        </div>
        <div className="favorite-facility-card-right">
          <div className="favorite-facility-text-container">
            <div className="favorite-facility-type">{facility.facilityType.name.toUpperCase()}</div>
            <div className="favorite-facility-name">{facility.name}</div>
            <div className="favorite-facility-address">{facility.address}</div>
          </div>
        </div>
      </Link>
      {<DeleteFavoriteButton favoriteFacilityObjectId={favoriteFacilityObject.id}/>}
    </div>
  );
};

export default FavoriteCard;
