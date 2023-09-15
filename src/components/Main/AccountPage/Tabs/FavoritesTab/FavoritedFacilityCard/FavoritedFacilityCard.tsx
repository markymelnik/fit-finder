import { Link } from "react-router-dom";
import usePhotoLoader from "../../../../../../hooks/usePhotoLoader";
import DeleteFavoriteButton from "../DeleteFavoriteButton/DeleteFavoriteButton";
import "./_favorited-facility-card.scss";

const FavoritedFacilityCard = ({ favoriteFacilityObject, onClick }: any) => {

  const { facility } = favoriteFacilityObject;

  const photo = usePhotoLoader(facility.id);

  const handleClick = () => {
    onClick({ ...facility });
  }

  return (
    <div className="favorited-facility-card" key={facility.id} onClick={handleClick}>
      <Link to="/facility" className="favorited-facility-card-link-wrapper">
        <div className="favorited-facility-card-left">
          {photo && <img src={photo} alt="facility main photo" />}
        </div>
        <div className="favorited-facility-card-right">
          <div className="favorited-facility-text-container">
            <div className="favorited-facility-name">{facility.name}</div>
            <div className="favorited-facility-address">{facility.address}</div>
            <div className="favorited-facility-type">{facility.facilityType.name.toUpperCase()}</div>
          </div>
        </div>
      </Link>
      {<DeleteFavoriteButton favoriteFacilityObjectId={favoriteFacilityObject.id}/>}
    </div>
  );
};

export default FavoritedFacilityCard;
