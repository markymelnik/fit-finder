import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import UpdateBox from "./UpdateBox/UpdateBox";
import GymSVG from "../../../../assets/svg/update_box/GymSVG";
import OutdoorParkSVG from "../../../../assets/svg/update_box/OutdoorParkSVG";
import PhoneSVG from "../../../../assets/svg/update_box/PhoneSVG";
import { setEnteredKeyword, setSelectedFacilityTypes } from "../../../../redux/slices/filterSlice";
import { AppDispatch } from "../../../../redux/store";
import "./_update-section.scss";

const UpdateSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleBrooklynSearchLinkClick = () => {
    dispatch(setEnteredKeyword("Brooklyn"));
    navigate("search");
  };

  const handleOutdoorFitnessAreaLinkClick = () => {
    dispatch(setSelectedFacilityTypes(["Outdoor Workout Area"]));
    navigate("search");
  };

  return (
    <section className="update-section-container">
      <div className="update-section-top">
        <h2 className="update-section-title">Recent Additions</h2>
        <h3 className="update-section-subtitle">{`See what's new!`}</h3>
      </div>
      <div className="updates-display">
        <UpdateBox
          boxId={`box-1`}
          boxTitle={`Fully Responsive`}
          boxDescription={`Our site is designed with ease of use in mind. Experience seamless
            browsing across phones, tablets, and computers. Find a location
            effortlessly on any device!`}
          boxSvg={<PhoneSVG />}
        />

        <UpdateBox
          boxId={`box-2`}
          boxTitle={`Outdoor Fitness Areas`}
          boxDescription={`Explore 123 newly-added outdoor fitness areas across all 5
          boroughs. Situated within New York City public parks, these
          fitness zones are free to use. They feature equipment such as pull
          up bars, parallel bars, incline benches, and more. Use our
          interactive map to pinpoint their exact location!`}
          boxSvg={<OutdoorParkSVG />}
          linkName={`outdoor-fitness-area-search-link`}
          linkText={`Search Outdoor Fitness Areas`}
          handleLinkClick={handleOutdoorFitnessAreaLinkClick}
        />

        <UpdateBox
          boxId={`box-3`}
          boxTitle={`Brooklyn Facilities`}
          boxDescription={`Discover over 250 newly-added fitness destinations in Brooklyn -
          from traditional gyms and martial arts centers to specialized
          boutique studios. Tailor your search with specific amenities and
          offerings to find a location that suits your needs!`}
          boxSvg={<GymSVG />}
          linkName={`brooklyn-search-link`}
          linkText={`Search Outdoor Fitness Areas`}
          handleLinkClick={handleBrooklynSearchLinkClick}
        />
      </div>
    </section>
  );
};

export default UpdateSection;
